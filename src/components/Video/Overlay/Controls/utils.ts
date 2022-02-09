export function toggleFullScreen(element: any) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Safari
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    // IE11
    element.msRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  }
}

export function getPercentage(current: number, max: number) {
  return Math.round((current / max) * 100);
}
