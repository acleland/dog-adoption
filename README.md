# Plan

1. Set up Supabase table and set the environment variables in
   github, in netlify, and locally
1. Write fetch function for getting dogs
1. Create Router
1. Create Home view that gets and displays the dogs
1. Create a DogList component
1. Create the DogCard component and update home
1. Create Detail Route and DogDetail component
   1. Create fetch function getting single dog info
   1. Create a DogDetail component to display
   1. Create a button to edit, and a button to delete
   1. redirect page using useHistory if delete is called
1. Make dog cards in Home links to detail page
1. Create New view
   1. Create DogForm component
   1. Make a create fetch call to supabase for adding a new dog
1. Create Edit view
   1. Reuse DogForm component but fill in current data in the initial state
   1. Create a an update call to supabase
