# Multi Hook Test

The goal of this small repo was to reproduce an issue I was having with a hook-view pattern in a larger app.

The issue came from two hooks, one being the "main" and the second relying on the state of that "main" hook. In this example Book and Chapter are a great standin for that type of situation.

We needed to add a "jump to chapter" function to this situation and there was a bit of a race condition happening where setting both the Book and Chapter states within each hook was causing somewhat random errors because of race conditions.

## Fix Proposals

**Single Hook**

One of the proposals was to make a single hook with both of these states. But that may not be best for the larger app as it's super handy having these two things sepratated and they are pretty independent of each other.

**Queue Microtask**

The other proposal was to use queueMicrotask to ensure the state was set in the correct order. This worked but it was a bit of a hack and didn't feel quite right. The queueMicrotask felt like a bandaid.

**Jotai**

The best solution I found was using jotai to create a global state for the book and chapter. This allowed me to set the state in the correct order and avoid any race conditions.

The Jotai configuration was a little complex as we needed to have an atom for Book, Chapter and a couple others for mantaining the "manually set chapter" and "automatic chapter".

There are internal atoms that maintain the "manual" and "automatic" ones and there's a simple if check "if you want to get the currentChapter, check first with the manualChapter atom, otherwise return the defaultChapter".
