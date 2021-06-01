# capstone
A capstone project for inventory management. Could be scaled to be an ecommerce store.

README Reqs:
    A link to your hosted working app.
    A paragraph-long description (elevator pitch) of your project.
    A list of the technologies used.
    A list of installation steps for the app itself and any dependencies - how would another developer run your site locally?
    Link to your user stories - who are your users, what do they want, and why?
    Link to your wireframes – sketches of major views / interfaces in your application.
    Link to your entity relationship diagrams – plan out your data relationships before coding.
    Descriptions of any unsolved problems or future features.


Technologies Used:


Project Guidelines:
    Create: New product
    Read: Check
    Update: Edit a product (Photo/description/name)
    Destroy: Delete a product

2 Models:

    Users: One regular, one authorized (to delete/update/etc.)
        
        Stretch Goals: 
            Reference who altered/deleted posts
            Favorite products/wishlist


    Inventory Items:
            Title
            Img
            Description
            Price
            Stock

            Type of Product: To enable different search filters


Product Vision: 


User-Story: 

    On the homepage user will have a navbar that allows them to login, or signup. 
        On the front of this page there will be images of the products displayed, (perhaps a carousel), a statement about the company, etc.
        There will be a button front and center to check inventory/view stock/etc.

    This will take them to the search/index page, with the products already filled in on the right hand side.

    There will be a search filter for them to locate a product by price range, name, or type of product.

    When they make these changes and submit, they will be redirected with the new queried search to see the results in the same format as before, on the right hand side.

    Click on one of these will bring them to a show-page of that product, with more information.



Admin User-Story:
        
    As an admin, the user will be able to delete or update an item from the show page.

    From the index page, they will be able to add an item. This could also be placed into the navbar.


Pages: 
    Homepage
    Index Page
    Show Page
    Disclosure page


Page Layouts:

    Homepage:

            Navbar
                4 buttons
                    Login, Sign-up, Home, Index Page


            Carousel: 4 imgs (href tags to show page, or just company culture?)

            Fake Articles

            Top Product: Anchor tag to show page

            Footer



    Index Page:
        
            Navbar

            Search Filter

            Inventory Items

            Footer


    


Stretch Goals: 

    Searchbar
            
    Error handling

    Carousel Links to Pages

    Changes made to database are logged somewhere (Log page? New Model?)

    Integrate an API (widget!)

    "This website uses cookies"