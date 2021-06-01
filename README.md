# capstone
A capstone project for inventory management. Could be scaled to be an ecommerce store.

README Reqs:
    A link to your hosted working app.
        https://git.generalassemb.ly/dazeyb/capstone

    A paragraph-long description (elevator pitch) of your project.
        This project will be a inventory management app that a company could feasibly convert to an ecommerce store as well.
        The usefulness comes from being able to view what is in stock, and add/remove/update the inventory as they see fit.
        This will be developed into a fully developed elevator pitch

    A list of the technologies used.
    A list of installation steps for the app itself and any dependencies - how would another developer run your site locally?
    Link to your user stories - who are your users, what do they want, and why?
    Link to your wireframes – sketches of major views / interfaces in your application.
    Link to your entity relationship diagrams – plan out your data relationships before coding.
    Descriptions of any unsolved problems or future features.


Technologies Used:

    MongoDB
    Express
    NodeJS


Project Guidelines:
    Create: New product
    Read: Check
    Update: Edit a product (Photo/description/name)
    Destroy: Delete a product

2 Models:

    Users: One regular, one authorized (to delete/update/etc.)


    Inventory Items:
            Name: Name of product
            Img: URL to img
            Description: Short blurb describing the product
            Price: $$$
            Stock: Amount left in inventory
            Type of Product: To enable different search filters


Product Vision: 


User-Story: (Shopper)

    On the homepage user will have a navbar that allows them to login, or signup. 
        On the front of this page there will be images of the products displayed, (perhaps a carousel), a statement about the company, etc.
        There will be a button front and center to check inventory/view stock/etc.

    This will take them to the search/index page, with the products already filled in on the right hand side.

    There will be a search filter for them to locate a product by price range, name, or type of product.

    When they make these changes and submit, they will be redirected with the new queried search to see the results in the same format as before, on the right hand side.

    Click on one of these will bring them to a show-page of that product, with more information.



Admin User-Story: (Employee)
        
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



    Show Page:

            Navbar
    


Stretch Goals: 

    Searchbar

    Error handling

    Carousel: and imgs link to show pages

    Changes made to database are logged somewhere (Log page? New Model?)
        Reference who altered/deleted posts
    
    Favorite products/wishlist

    Integrate an API (widget!)

    "This website uses cookies"