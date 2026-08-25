import { Minus, Plus, RotateCcw, X } from 'lucide-react';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

export default function ProductGallery({ images = [] }) {
  const safeImages = Array.isArray(images) ? images : [];

  // =========================================================
  // CURRENT IMAGE
  // =========================================================

  const [current, setCurrent] = useState(0);

  // =========================================================
  // VIEWER
  // =========================================================

  const [viewerOpen, setViewerOpen] = useState(false);

  // =========================================================
  // ZOOM
  // =========================================================

  const [zoom, setZoom] = useState(1);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  // =========================================================
  // IMAGE DRAG
  // =========================================================

  const imageDragging = useRef(false);

  const imageDragStart = useRef({
    x: 0,
    y: 0,
  });

  // =========================================================
  // THUMBNAIL DRAG
  // =========================================================

  const thumbnailContainer = useRef(null);

  const thumbnailDrag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  // =========================================================
  // SAFE CURRENT IMAGE
  // =========================================================

  /*
   * IMPORTANT:
   * We do NOT use an effect to reset current.
   *
   * This avoids:
   *
   * "Calling setState synchronously within an effect"
   */

  const safeCurrent =
    safeImages.length > 0 ? Math.min(current, safeImages.length - 1) : 0;

  const currentImage = safeImages[safeCurrent];

  // =========================================================
  // RESET ZOOM
  // =========================================================

  const resetZoom = useCallback(() => {
    setZoom(1);

    setPosition({
      x: 0,
      y: 0,
    });

    setIsDragging(false);

    imageDragging.current = false;
  }, []);

  // =========================================================
  // CHANGE IMAGE
  // =========================================================

  const changeImage = useCallback(
    (index) => {
      if (index < 0 || index >= safeImages.length) {
        return;
      }

      setCurrent(index);
      resetZoom();
    },
    [safeImages.length, resetZoom]
  );

  // =========================================================
  // OPEN VIEWER
  // =========================================================

  const openViewer = useCallback(() => {
    if (!currentImage) return;

    resetZoom();
    setViewerOpen(true);
  }, [currentImage, resetZoom]);

  // =========================================================
  // CLOSE VIEWER
  // =========================================================

  const closeViewer = useCallback(() => {
    setViewerOpen(false);
    resetZoom();
  }, [resetZoom]);

  // =========================================================
  // PREVIOUS
  // =========================================================

  const previous = useCallback(() => {
    if (safeImages.length <= 1) return;

    setCurrent((index) => (index === 0 ? safeImages.length - 1 : index - 1));

    resetZoom();
  }, [safeImages.length, resetZoom]);

  // =========================================================
  // NEXT
  // =========================================================

  const next = useCallback(() => {
    if (safeImages.length <= 1) return;

    setCurrent((index) => (index === safeImages.length - 1 ? 0 : index + 1));

    resetZoom();
  }, [safeImages.length, resetZoom]);

  // =========================================================
  // ZOOM IN
  // =========================================================

  const zoomIn = useCallback(() => {
    setZoom((value) => Math.min(value + 0.5, 4));
  }, []);

  // =========================================================
  // ZOOM OUT
  // =========================================================

  const zoomOut = useCallback(() => {
    setZoom((value) => {
      const nextZoom = Math.max(value - 0.5, 1);

      if (nextZoom === 1) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return nextZoom;
    });
  }, []);

  // =========================================================
  // IMAGE POINTER DOWN
  // =========================================================

  const handleImagePointerDown = (event) => {
    if (zoom <= 1) return;

    imageDragging.current = true;

    setIsDragging(true);

    imageDragStart.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  // =========================================================
  // IMAGE POINTER MOVE
  // =========================================================

  const handleImagePointerMove = (event) => {
    if (!imageDragging.current || zoom <= 1) {
      return;
    }

    setPosition({
      x: event.clientX - imageDragStart.current.x,

      y: event.clientY - imageDragStart.current.y,
    });
  };

  // =========================================================
  // IMAGE POINTER UP
  // =========================================================

  const handleImagePointerUp = (event) => {
    imageDragging.current = false;

    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Already released
    }
  };

  // =========================================================
  // WHEEL ZOOM
  // =========================================================

  const handleWheel = (event) => {
    if (!viewerOpen) return;

    event.preventDefault();

    if (event.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // =========================================================
  // THUMBNAIL DRAG START
  // =========================================================

  const handleThumbnailMouseDown = (event) => {
    const container = thumbnailContainer.current;

    if (!container) return;

    thumbnailDrag.current = {
      active: true,
      startX: event.pageX,
      startScrollLeft: container.scrollLeft,
      moved: false,
    };
  };

  // =========================================================
  // THUMBNAIL DRAG MOVE
  // =========================================================

  const handleThumbnailMouseMove = (event) => {
    const container = thumbnailContainer.current;

    const drag = thumbnailDrag.current;

    if (!container || !drag.active) {
      return;
    }

    const distance = event.pageX - drag.startX;

    if (Math.abs(distance) > 5) {
      drag.moved = true;
    }

    container.scrollLeft = drag.startScrollLeft - distance;
  };

  // =========================================================
  // THUMBNAIL DRAG END
  // =========================================================

  const endThumbnailDrag = () => {
    thumbnailDrag.current.active = false;

    setTimeout(() => {
      thumbnailDrag.current.moved = false;
    }, 50);
  };

  // =========================================================
  // THUMBNAIL TOUCH
  // =========================================================

  const handleThumbnailTouchStart = (event) => {
    const container = thumbnailContainer.current;

    if (!container) return;

    thumbnailDrag.current = {
      active: true,
      startX: event.touches[0].pageX,
      startScrollLeft: container.scrollLeft,
      moved: false,
    };
  };

  const handleThumbnailTouchMove = (event) => {
    const container = thumbnailContainer.current;

    const drag = thumbnailDrag.current;

    if (!container || !drag.active) {
      return;
    }

    const distance = event.touches[0].pageX - drag.startX;

    if (Math.abs(distance) > 5) {
      drag.moved = true;
    }

    container.scrollLeft = drag.startScrollLeft - distance;
  };

  const handleThumbnailTouchEnd = () => {
    endThumbnailDrag();
  };

  // =========================================================
  // KEYBOARD CONTROLS
  // =========================================================

  useEffect(() => {
    if (!viewerOpen) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'Escape':
          closeViewer();
          break;

        case 'ArrowLeft':
          previous();
          break;

        case 'ArrowRight':
          next();
          break;

        case '+':
        case '=':
          zoomIn();
          break;

        case '-':
          zoomOut();
          break;

        case '0':
          resetZoom();
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewerOpen, closeViewer, previous, next, zoomIn, zoomOut, resetZoom]);

  // =========================================================
  // EMPTY STATE
  // =========================================================

  if (!currentImage) {
    return (
      <div
        className="
          aspect-square
          w-full
          rounded-xl
          bg-muted
        "
      />
    );
  }

  // =========================================================
  // MAIN COMPONENT
  // =========================================================

  return (
    <>
      <div className="w-full min-w-0">
        {/* =================================================
            MAIN IMAGE
        ================================================= */}

        <div
          className="
            relative
            aspect-square
            w-full
            overflow-hidden
            rounded-xl
            bg-muted
          "
        >
          <button
            type="button"
            onClick={openViewer}
            className="
              group
              relative
              flex
              h-full
              w-full
              cursor-zoom-in
              items-center
              justify-center
            "
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt || 'Product image'}
              draggable={false}
              className="
                h-full
                w-full
                select-none
                object-contain
                p-3
                transition-transform
                duration-300
              "
            />
          </button>

          {safeImages.length > 1 && (
            <div
              className="
                absolute
                bottom-2
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-black/60
                px-2.5
                py-1
                text-[10px]
                font-medium
                text-white
                backdrop-blur
              "
            >
              {safeCurrent + 1} / {safeImages.length}
            </div>
          )}
        </div>

        {/* =================================================
            THUMBNAILS
        ================================================= */}

        {safeImages.length > 1 && (
          <div
            ref={thumbnailContainer}
            className="
              mt-2
              flex
              w-full
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-none
              cursor-grab
              select-none
              active:cursor-grabbing
              touch-pan-x
            "
            onMouseDown={handleThumbnailMouseDown}
            onMouseMove={handleThumbnailMouseMove}
            onMouseUp={endThumbnailDrag}
            onMouseLeave={endThumbnailDrag}
            onTouchStart={handleThumbnailTouchStart}
            onTouchMove={handleThumbnailTouchMove}
            onTouchEnd={handleThumbnailTouchEnd}
          >
            {safeImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => {
                  if (thumbnailDrag.current.moved) {
                    return;
                  }

                  changeImage(index);
                }}
                className={`
                    relative
                    h-14
                    w-14
                    min-w-14
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    border-2
                    bg-muted
                    transition-all
                    cursor-pointer
                    ${
                      safeCurrent === index
                        ? `
                          border-yellow-400
                          dark:border-yellow-500
                          ring-2
                          ring-yellow-400/20
                        `
                        : `
                          border-transparent
                          hover:border-border
                        `
                    }
                  `}
              >
                <img
                  src={image.src}
                  alt={image.alt || ''}
                  draggable={false}
                  className="
                      pointer-events-none
                      h-full
                      w-full
                      select-none
                      object-contain
                    "
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          FULLSCREEN DIALOG
      ===================================================== */}

      <Dialog
        open={viewerOpen}
        onOpenChange={(open) => {
          if (!open) {
            closeViewer();
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="
            h-[100dvh]
            w-screen
            max-w-none
            overflow-hidden
            rounded-none
            border-0
            bg-black
            p-0
            shadow-none

            sm:h-[96vh]
            sm:w-[96vw]
            sm:max-w-[1500px]
            sm:rounded-2xl
            sm:border
            sm:border-white/10
            sm:shadow-2xl
          "
        >
          <DialogTitle className="sr-only">Product image viewer</DialogTitle>

          {/* Background */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]
            "
          />

          {/* =================================================
              TOP BAR
          ================================================= */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-50
              flex
              items-center
              justify-between
              px-4
              py-4
              sm:px-6
              sm:py-5
            "
          >
            <div
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.08]
                px-3
                py-1.5
                text-xs
                font-medium
                text-white
                backdrop-blur-xl
              "
            >
              {safeCurrent + 1} / {safeImages.length}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={closeViewer}
              className="
                h-10
                w-10
                rounded-full
                border
                border-white/10
                bg-white/[0.08]
                text-white
                backdrop-blur-xl
                hover:bg-white/[0.15]
                hover:text-white
              "
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* =================================================
              IMAGE AREA
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              overflow-hidden
              touch-none
              select-none
              px-4
              pb-32
              pt-16

              sm:px-12
              sm:pb-36
              sm:pt-20
            "
            onWheel={handleWheel}
            onPointerDown={handleImagePointerDown}
            onPointerMove={handleImagePointerMove}
            onPointerUp={handleImagePointerUp}
            onPointerCancel={handleImagePointerUp}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt || 'Product image'}
              draggable={false}
              onDoubleClick={() => {
                if (zoom === 1) {
                  zoomIn();
                } else {
                  resetZoom();
                }
              }}
              className={`
                max-h-full
                max-w-full
                object-contain

                ${
                  zoom > 1
                    ? 'cursor-grab active:cursor-grabbing'
                    : 'cursor-zoom-in'
                }
              `}
              style={{
                transform: `
                  translate(
                    ${position.x}px,
                    ${position.y}px
                  )
                  scale(${zoom})
                `,
                transition: isDragging ? 'none' : 'transform 200ms ease',
              }}
            />
          </div>

          {/* =================================================
              BOTTOM AREA
          ================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-50
              flex
              flex-col
              items-center
              gap-3
              px-4
              pb-4

              sm:gap-4
              sm:px-6
              sm:pb-6
            "
          >
            {/* Thumbnails */}

            <div
              className="
                max-w-full
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-2
                py-2
                backdrop-blur-xl
              "
            >
              <div
                ref={thumbnailContainer}
                className="
                  flex
                  max-w-[90vw]
                  gap-2
                  overflow-x-auto
                  scrollbar-none
                  cursor-grab
                  select-none
                  touch-pan-x
                  active:cursor-grabbing

                  sm:max-w-[750px]
                "
                onMouseDown={handleThumbnailMouseDown}
                onMouseMove={handleThumbnailMouseMove}
                onMouseUp={endThumbnailDrag}
                onMouseLeave={endThumbnailDrag}
                onTouchStart={handleThumbnailTouchStart}
                onTouchMove={handleThumbnailTouchMove}
                onTouchEnd={handleThumbnailTouchEnd}
              >
                {safeImages.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => {
                      if (thumbnailDrag.current.moved) {
                        return;
                      }

                      changeImage(index);
                    }}
                    className={`
                        relative
                        h-12
                        w-12
                        min-w-12
                        overflow-hidden
                        rounded-lg
                        border
                        bg-white

                        sm:h-14
                        sm:w-14
                        sm:min-w-14

                        ${
                          safeCurrent === index
                            ? `
                              border-yellow-400
                          dark:border-yellow-500

                              ring-2
                              ring-yellow-400/30
                            `
                            : `
                              border-white/10
                              opacity-60
                              hover:opacity-100
                            `
                        }
                      `}
                  >
                    <img
                      src={image.src}
                      alt=""
                      draggable={false}
                      className="
                          pointer-events-none
                          h-full
                          w-full
                          object-contain
                        "
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Zoom controls */}

            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-white/10
                bg-white/[0.08]
                p-1
                backdrop-blur-xl
              "
            >
              <Button
                variant="ghost"
                size="icon"
                disabled={zoom <= 1}
                onClick={zoomOut}
                className="
                  h-9
                  w-9
                  rounded-full
                  text-white
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Minus className="h-4 w-4" />
              </Button>

              <button
                type="button"
                onClick={resetZoom}
                className="
                  min-w-14
                  rounded-full
                  px-2
                  py-2
                  text-xs
                  font-medium
                  text-white
                  hover:bg-white/10
                "
              >
                {Math.round(zoom * 100)}%
              </button>

              <Button
                variant="ghost"
                size="icon"
                disabled={zoom >= 4}
                onClick={zoomIn}
                className="
                  h-9
                  w-9
                  rounded-full
                  text-white
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Plus className="h-4 w-4" />
              </Button>

              <div className="mx-1 h-5 w-px bg-white/10" />

              <Button
                variant="ghost"
                size="icon"
                onClick={resetZoom}
                className="
                  h-9
                  w-9
                  rounded-full
                  text-white
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop hint */}

          <div
            className="
              absolute
              bottom-6
              left-6
              z-40
              hidden
              text-[10px]
              text-white/30
              lg:block
            "
          >
            Scroll to zoom · Drag to move · Double-click to zoom
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
