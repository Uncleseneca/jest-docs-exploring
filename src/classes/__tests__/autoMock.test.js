import { SoundPlayer } from '../soundPlayer';
import { SoundPlayerConsumer } from '../soundPlayerConsumer';
jest.mock('../soundPlayer.js');

beforeEach(() => {
  SoundPlayer.mockClear();
});

test('SoundPlayer constructor is called when on SoundPlayerConsumer creation', () => {
  const sonyPlayer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalled();
});
