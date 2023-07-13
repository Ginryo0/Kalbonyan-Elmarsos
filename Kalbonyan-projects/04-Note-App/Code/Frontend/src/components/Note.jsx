/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useAppCtx } from '../context/appCtx';
import Loader from './Loader';

const Note = ({ note, active, onChangeStatus, onDelete }) => {
  const [updateStatusLoading, setUpdateStatusLoading] = useState(false);
  const [deleteNoteLoading, setDeleteNoteLoading] = useState(false);

  const { theme, lang } = useAppCtx();
  return (
    <div
      className={`w-full flex gap-4 items-center shadow-sm px-5 ${
        theme != 'dark'
          ? 'bg-white border-b-[#E3E4F1]'
          : 'bg-dark-2 border-b-[#393A4B]'
      } ${
        lang == 'ar' && 'flex-row-reverse'
      }  md:h-[64px] h-[52px] border-b-[1px]`}
    >
      {updateStatusLoading && <Loader className={'mini'} />}
      {!updateStatusLoading && (
        <button
          className={`rounded-full w-[22.85px] h-[20px] ${
            theme != 'dark' ? 'border-[#E3E4F1]' : 'border-secondary'
          } ${
            !active && 'border-none bg-primary'
          } border-[1px] flex items-center justify-center`}
          onClick={async () => {
            setUpdateStatusLoading(true);
            await onChangeStatus();
            setUpdateStatusLoading(false);
          }}
        >
          {!active && <img src="/check.svg" alt="checkmark" width={11} />}
        </button>
      )}
      <div
        className={` w-full py-2 bg-transparent focus:outline-none ${
          lang == 'ar' && 'text-right'
        } ${!active && 'line-through'}  ${
          active && (theme != 'dark' ? 'text-tertiary' : 'text-[#C8CBE7]')
        }  ${
          !active && (theme != 'dark' ? 'text-[#D1D2DA]' : 'text-[#4D5067]')
        }`}
      >
        {note}
      </div>
      {deleteNoteLoading && <Loader className={'mini'} />}
      {!deleteNoteLoading && (
        <button
          onClick={async () => {
            setDeleteNoteLoading(true);
            await onDelete();
            setDeleteNoteLoading(false);
          }}
        >
          <img src="delete.svg" alt="x" width={18.22} />
        </button>
      )}
    </div>
  );
};
export default Note;
