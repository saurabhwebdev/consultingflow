// Sound effects utility for chat component

// Preload sounds for better performance
const preloadSound = (url: string): HTMLAudioElement => {
  const audio = new Audio(url);
  audio.preload = 'auto';
  return audio;
};

// Create sound instances
const messageSoundEffect = preloadSound('/sound/message.mp3'); // Local message sound
const openChatSoundEffect = preloadSound('/sound/chatopensound.mp3'); // Local chat open sound

// Play sound effects
export const playMessageSound = (): void => {
  messageSoundEffect.currentTime = 0;
  messageSoundEffect.volume = 0.4;
  messageSoundEffect.play().catch(error => {
    console.warn('Could not play message sound:', error);
  });
};

// We'll use the message sound for notifications as well since we only have two sound files
export const playNotificationSound = (): void => {
  messageSoundEffect.currentTime = 0;
  messageSoundEffect.volume = 0.4;
  messageSoundEffect.play().catch(error => {
    console.warn('Could not play notification sound:', error);
  });
};

export const playOpenChatSound = (): void => {
  openChatSoundEffect.currentTime = 0;
  openChatSoundEffect.volume = 0.3;
  openChatSoundEffect.play().catch(error => {
    console.warn('Could not play open chat sound:', error);
  });
}; 