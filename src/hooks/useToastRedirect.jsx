import { useRef } from "react";
import { toast } from "react-toastify";

function useToastRedirect({
  delay = 3,
  toastMessage = (alt, s) =>
    `${s} sn sonra ${alt} sayfasına yönlendirileceksiniz...`,
  loadingMessage = "Yönlendiriliyor...",
  progressInterval = 50,
} = {}) {
  const timerRef = useRef();
  const lastSecRef = useRef(delay);

  function handleClick(e, { href, alt }) {
    e.preventDefault();

    const totalMs = delay * 1000;
    const start = Date.now();

    lastSecRef.current = delay; // Başlangıç değeri

    let toastId = toast.info(toastMessage(alt, delay), {
      autoClose: false,
      isLoading: false,
      closeButton: false,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      toastClassName: "custom-toast",
      progress: 1,
    });

    function updateProgress() {
      const elapsed = Date.now() - start;
      const remainingMs = Math.max(0, totalMs - elapsed);
      const progress = remainingMs / totalMs;

      const nowSec = Math.ceil(remainingMs / 1000);

      toast.update(toastId, {
        progress,
        render: toastMessage(alt, nowSec),
      });

      if (remainingMs > 0) {
        timerRef.current = setTimeout(updateProgress, progressInterval);
      } else {
        toast.update(toastId, {
          render: loadingMessage,
          progress: 0,
        });
        setTimeout(() => {
          toast.dismiss(toastId);
          window.open(href, "_blank", "noopener,noreferrer");
        }, 700);
      }
    }

    updateProgress();
  }

  return handleClick;
}

export default useToastRedirect;
