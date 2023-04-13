Scroll trigger:

We apply the movement and scrolltrigger at the container slide.

# We need to defined a `SLIDE_COUNT`.

Then we will apply a container width = `${SLIDE_COUNT * 100}vw` because we need to have a large container width that depends on slide count.

# The main mouvement is the slide of All slides.

`xPercent: -100 * (SLIDE_COUNT - 1)`: We move ALL SLIDE to `-100 * (SLIDE_COUNT - 1)`

# scrollTrigger:

We assign the trigger start movement on the parent container `trigger: '.slides-container'`

Then we start the trigger when the user scroll from top of the container to the top of the viewport (we can see the trigger with `markers: true`).

## end

End value is the value of the scroll when the FULL movement is finished.

`end: '+=3500'`: Means that bellow 3500 of the top of container, we finish the move.

More the value is, more the movement is slow, it affect the scroll bar size.

End value will create blank space if the value is above the height page.

## pin

We need to pin the container since we want to have the container on all of the viewport during the movement.

## scrub

It use to have a control on the mouvement when scrolling, we scroll the movement follow, we scroll back the movement scroll back.

## snap

When you scroll, the slide can be stop between two slides. To avoid this and have something more nice, we can add snap value to mark slide point.

For exemple if I scroll at 75% of the first slide, the scroll will snap to the second slide.

We can add delay & duration.

`snapTo`: Value between 0-1.

0.1 will create 10 scrolls points.

0.5 will create 2 scrolls points.
