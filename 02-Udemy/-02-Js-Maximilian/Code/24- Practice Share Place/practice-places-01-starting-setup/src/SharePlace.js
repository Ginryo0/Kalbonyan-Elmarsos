import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress, getAddressFromCoords } from './Utility/Location';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    locateBtn.addEventListener('click', this.locateUserHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler);
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    const sharedLinkInputEl = document.getElementById('share-link');
    if (!navigator.clipboard) {
      sharedLinkInputEl.select(); // select -> make easier to copy
      return;
    }
    navigator.clipboard
      .writeText(sharedLinkInputEl.value)
      .then(() => {
        alert('Copied into clipboard!');
      })
      .catch((err) => {
        console.log(err);
        sharedLinkInputEl.select();
      });
  }
  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render();
    } else {
      this.map = new Map(coordinates);
    }
    this.shareBtn.disabled = false;
    const sharedLinkInputEl = document.getElementById('share-link');
    sharedLinkInputEl.value = `${location.origin}/my-place?address=${encodeURI(
      address
    )}&lat=${coordinates.lat},&lng=${coordinates.lng}`;
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location not avaialble in your browser - plz use a more modern one'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (sucessRes) => {
        // the direct parent function has to be marked async
        const coordinates = {
          lat: sucessRes.coords.latitude + Math.random() * 50,
          lng: sucessRes.coords.longitude + Math.random() * 50,
        };
        const address = await getAddressFromCoords(coordinates);
        modal.hide();
        this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        alert('Could not locate you please enter your adress manually');
      }
    );
  }
  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait'
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (err) {
      alert(err.message);
    }
    modal.hide();
  }
}

new PlaceFinder();
