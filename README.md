# Synopsis:

This project is inspired by "pointerpointer.com" which was a phenomenon on the internet back around 2012. On that website, an image is displayed of a person pointing at the website visitor's cursor, with the images changing depending on where the viewer's cursor is located.

# How it works
This was my process of making this program:
1. Download all League of Legends champion splash arts
2. For each champpion, determine a coordinate on their splash art where their eyes are looking
3. Turn those coordinates into a color-coded voronoi map
4. With the voronoi map in the background, display the champion splash art that corresponds with the specific RGB color that the cursor is on, and show the champion image above the voronoi map, keeping it hidden

![Alt Text: As the monitor cursor moves, the champion splash arts change to look at it](https://media0.giphy.com/media/1tfuKjuoFIhYRHB877/giphy.gif)

### pointerpointer.com for League of Legends

use at https://oganesso.github.io/lol-pointerpointer/
