import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Staten_Island_Ferry_%28New_York%29.jpg/1920px-Staten_Island_Ferry_%28New_York%29.jpg',
    address: 'New York',
    description: 'A great meetup ever',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Staten_Island_Ferry_%28New_York%29.jpg/1920px-Staten_Island_Ferry_%28New_York%29.jpg',
    address: 'New York',
    description: 'A huge meetup ever',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Staten_Island_Ferry_%28New_York%29.jpg/1920px-Staten_Island_Ferry_%28New_York%29.jpg',
    address: 'New York',
    description: 'A small meetup ever',
  },
];

const HomePage = () => {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  )
};

export default HomePage;
