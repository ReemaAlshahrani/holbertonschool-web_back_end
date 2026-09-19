import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  // Create and return an array of 3 ClassRoom objects with specific sizes
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
