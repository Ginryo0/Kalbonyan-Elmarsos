import { useEffect, useState } from 'react';
import axios from 'axios';
import Note from '../components/Note';
import { useAppCtx } from '../context/appCtx';
import en from '../assets/constants/en';
import ar from '../assets/constants/ar';
import Loader from '../components/Loader';

const Home = () => {
  const {
    lang,
    theme,
    token,
    displaySuccessAlert,
    displayDangerAlert,
    isLoading,
    startLoading,
    finishLoading,
  } = useAppCtx();

  const [notes, setNotes] = useState([]);
  const [notesStatus, setNotesStatus] = useState('all');
  const [newNote, setNewNote] = useState('');

  let text = lang == 'en' ? en.home : ar.home;

  // update notes to be showed
  const shownNotes =
    notesStatus == 'all'
      ? notes
      : notesStatus == 'active'
      ? notes.filter((item) => item.active)
      : notes.filter((item) => !item.active);

  const getNotes = async () => {
    const { data } = await axios.get('/api/notes', {
      headers: { Authorization: `Bearer ${token}` },
    });

    setNotes(data.notes);
    finishLoading();
    return;
  };

  useEffect(() => {
    if (token) {
      startLoading();
      getNotes();
    }
  }, [token]);

  const clearCompletedNotes = async () => {
    try {
      startLoading();
      const { data } = await axios.delete('/api/notes/clear-completed', {
        headers: { Authorization: `Bearer ${token}` },
      });

      getNotes();
      displaySuccessAlert(data.message);
    } catch (err) {
      finishLoading();
      displayDangerAlert('Failed to clear completed notes.');
    }
  };

  const addNote = async () => {
    try {
      startLoading();
      const { data } = await axios.post(
        '/api/notes/add',
        { note: newNote },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      getNotes();
      displaySuccessAlert(data.message);
      setNewNote('');
    } catch (err) {
      finishLoading();
      displayDangerAlert('Failed to add a new note.');
    }
  };

  const toggleNoteStatus = async (id) => {
    try {
      const { data } = await axios.patch(
        `/api/notes/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      getNotes();
      displaySuccessAlert(data.message);
    } catch (err) {
      finishLoading();
      displayDangerAlert('Failed to change note status.');
    }
  };

  const deleteNote = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/notes/${id}`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      getNotes();
      displaySuccessAlert(data.message);
    } catch (err) {
      finishLoading();
      displayDangerAlert('Failed to delete note.');
    }
  };

  return (
    <>
      <div
        className={`w-full flex gap-4 items-center shadow-sm px-5 ${
          theme != 'dark' ? 'bg-white' : 'bg-dark-2'
        } rounded-md md:h-[64px] h-[52px] ${
          lang == 'ar' && 'flex-row-reverse'
        }`}
      >
        <div
          className={`rounded-full w-[21px] h-[20px] ${
            theme != 'dark' ? 'border-[#E3E4F1]' : 'border-secondary'
          } border-[1px]`}
        ></div>
        <input
          type="text"
          placeholder={text.placeholder}
          className={` ${
            theme != 'dark' ? 'text-tertiary' : 'text-[#C8CBE7]'
          } w-full py-2 bg-transparent focus:outline-none ${
            lang == 'ar' && 'text-right'
          }`}
          value={newNote}
          onChange={(e) => {
            setNewNote(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key == 'Enter') {
              addNote();
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col rounded-md overflow-hidden shadow-md">
          {shownNotes.map((item, idx) => (
            <Note
              key={idx}
              {...item}
              onChangeStatus={toggleNoteStatus.bind(null, item._id)}
              onDelete={deleteNote.bind(null, item._id)}
            />
          ))}

          <div
            className={`w-full flex gap-4 items-center shadow-sm px-5 ${
              theme != 'dark' ? 'bg-white' : 'bg-dark-2'
            }  h-[50px] flex justify-between ${
              lang == 'ar' && 'flex-row-reverse'
            }`}
          >
            <div
              className={`${
                theme != 'dark' ? 'text-secondary' : 'text-[#5B5E7E]'
              } text-[14.5px] inline-flex gap-1 ${
                lang == 'ar' && 'flex-row-reverse'
              }`}
              title={`count of ${notesStatus} notes.`}
            >
              {shownNotes.length || 0} <span>{text.items}</span>
            </div>
            <div
              className={`md:flex ${
                lang == 'ar' && 'flex-row-reverse'
              } hidden gap-4`}
            >
              <button
                className={` focus:outline-none text-[14.5px] font-bold flex gap-4 ${
                  notesStatus == 'all'
                    ? 'text-primary'
                    : theme != 'dark'
                    ? 'text-secondary'
                    : 'text-[#5B5E7E] hover:text-[#E3E4F1]'
                }`}
                onClick={() => {
                  setNotesStatus('all');
                }}
              >
                {text.all}
              </button>
              <button
                className={` focus:outline-none text-[14.5px] font-bold flex gap-4 ${
                  notesStatus == 'active'
                    ? 'text-primary'
                    : theme != 'dark'
                    ? 'text-secondary'
                    : 'text-[#5B5E7E] hover:text-[#E3E4F1]'
                }`}
                onClick={() => {
                  setNotesStatus('active');
                }}
              >
                {text.active}
              </button>
              <button
                className={` focus:outline-none text-[14.5px] font-bold flex gap-4 ${
                  notesStatus == 'completed'
                    ? 'text-primary'
                    : theme != 'dark'
                    ? 'text-secondary'
                    : 'text-[#5B5E7E] hover:text-[#E3E4F1]'
                }`}
                onClick={() => {
                  setNotesStatus('completed');
                }}
              >
                {text.completed}
              </button>
            </div>
            <button
              className={`${
                theme != 'dark' ? 'text-secondary' : 'text-[#E3E4F1]'
              } text-[14px]`}
              onClick={() => {
                clearCompletedNotes();
              }}
            >
              {text.clear}{' '}
            </button>
          </div>
        </div>
        <div
          className={`w-full md:hidden flex gap-5 rounded-md justify-center items-center shadow-sm px-5 ${
            theme != 'dark' ? 'bg-white' : 'bg-dark-2'
          } ${lang == 'ar' && 'flex-row-reverse'} h-[50px] `}
        >
          <button
            className={` focus:outline-none text-[14.5px] font-bold flex gap-4 ${
              notesStatus == 'all'
                ? 'text-primary'
                : theme != 'dark'
                ? 'text-secondary'
                : 'text-[#5B5E7E] hover:text-[#E3E4F1]'
            }`}
            onClick={() => {
              setNotesStatus('all');
            }}
          >
            {text.all}
          </button>
          <button
            className={` focus:outline-none text-[14.5px] font-bold flex gap-4 ${
              notesStatus == 'active'
                ? 'text-primary'
                : theme != 'dark'
                ? 'text-secondary'
                : 'text-[#5B5E7E] hover:text-[#E3E4F1]'
            } `}
            onClick={() => {
              setNotesStatus('active');
            }}
          >
            {text.active}
          </button>
          <button
            className={` focus:outline-none text-[14.5px] font-bold flex gap-4 ${
              notesStatus == 'completed'
                ? 'text-primary'
                : theme != 'dark'
                ? 'text-secondary'
                : 'text-[#5B5E7E] hover:text-[#E3E4F1]'
            } ${lang == 'ar' && 'flex-row-reverse'}`}
            onClick={() => {
              setNotesStatus('completed');
            }}
          >
            {text.completed}
          </button>
        </div>
        {isLoading && <Loader />}
      </div>
    </>
  );
};
export default Home;
