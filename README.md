Check out the app here: https://mag-nets.herokuapp.com/

Major rehaul of the website was completed, the new code (similar, but with an
updated Material-UI framework, website layout, and nested react routes) can be
found at https://github.com/buckethead1986/magnets-update.


## Overview

Magnets is a front-end React application that allows users to create poems just
like those magnetic fridge poetry sets. The poems are created using drag and
drop React components (react-dnd) from Rails API back end word banks. Users can
favorite and follow other users and their poems.

## Technology

Magnets uses the create-react-app pack for the React skeleton. It's a
single-page application that simulates routes using React Router. The backend
JSON API is built in Ruby on Rails: https://github.com/buckethead1986/magnets-api.
The database is Postgres and is responsible for keeping all of the data
pertaining to sessions, users, challenges, and comments. The user authentication
is built using a session controller in Rails and a JWT token to authenticate the
user via the Rails backend and in the user's local browser storage.

## Functionality

A user logs in and can create a new poem or peruse other users and their poems.

When a user creates a poem, they're brought to a page with multiple selectable
word banks that modify the state of allowable words, made up of drag and drop
React components. Once their creation is to their liking, they can submit it and
are brought to a show page for that particular poem.

The profile page (accessed via a dropdown in the NavBar, along with making new
poems and seeing all poems) allows users to see all other users in a list,
organized by followed and unfollowed. Clicking on a user in that list brings up
that users avatar and poems. Clicking on only your avatar will let you change
the image.

Every poem, wherever displayed, can be favorited and its' user followed or
unfollowed, which are updated immediately.

## Layout / Design

I used Googles Material UI for the design (with some select inline CSS). This
component-based styling allows for easy integration of components and an overall
cohesion of style. I divvied up created poem components into Material Cards, and
users appear in a List on the profile page. On the poems index page, there is a
dropdown filter that allows multiple selections between any and all users, and
by favorited poems, which updates upon favoriting/unfavoriting a poem.

The design is meant to be as intuitive as possible, anticipating where the user
will click when they want a specific action, and incorporating that functionality.

## Design Patterns

I used several design patterns, but stuck mostly with a container model. I used
container components for the Profile and Create Poem uppermost parent components
(before App and Index), and subdivided the child components into folders
depending on functionality or website location.
