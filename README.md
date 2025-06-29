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

Basically there are two "basic" atoms and a couple derrived atoms that will help maintain the state of those basic atoms. The basic atoms are not exported and their read/write are handled by the derrived atoms. The key to the "select section" that was causing the issue is now eliminated due to the basic atoms being able to be anything and not relying on the state of the other.

The "currentBook" derrived atom is the read/write atom that we use that lives above the basic book atom. This is in charge of setting the default chapter when the new book is selected.

The "jumpToChapter" atom is in charge of setting the correct book and chapter at the same time. The key is that the views know that this combination is valid. However that logic could be pushed into this atom as well (set book and default if the chapter isn't within the proposed book for example)
