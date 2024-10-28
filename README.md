Beauty Hub - Cosmetology Website
Project Description
Beauty Hub is a modern cosmetological website designed for users to explore, filter, and select beauty products easily. It provides a seamless browsing experience for beauty enthusiasts, with functionalities that allow users to filter products, save preferences, and switch between light and dark modes. By implementing local storage, user preferences and sessions are saved, ensuring that their customizations are remembered across visits. The project was developed by Akerke Kassymbekova, Ainur Ali, and Darina Abdukadyrova, aiming to deliver a user-friendly and customizable experience with features like theme toggling, personalized filtering, and user authentication. 
Beauty Hub includes six unique pages, each tailored to provide a convenient and engaging experience:
1. Home Page: The Home Page introduces new users to the website and includes a brief description of Beauty Hub's purpose, a section featuring upcoming products, and a tutorial video to attract visitors. This page also includes an FAQ section with popular questions and answers, as well as a “Join Us” area where users can sign up. A unique interactive button changes the page’s background and plays a short, beautiful sound to create an immersive experience.
 

2. About Us Page: On the About Us Page, users can find comprehensive information about Beauty Hub’s mission, values, team members, and a snapshot of the products offered. This page is designed to build trust and provide insights into the company and its commitment to quality.
 

3. Tutorials Page: The Tutorials Page features a selection of video content covering makeup tips, skincare routines, and general beauty advice. Users can browse tutorial questions, view product spotlights for featured items used in the tutorials, and leave feedback. Clicking the magic wand emoji on this page plays a soothing sound, adding a touch of fun for viewers.
 

4. Discounts Page: The Discounts Page showcases products currently on sale. Users can view product details, add items to their cart, and, after signing in, proceed with purchases. The page is designed for easy navigation, making it simple for users to find discounted products.
 

5. Products Page: On the Products Page, users can explore three main sections: new arrivals, makeup products, and haircare products. The page includes a filtering option to sort products by category or cost, helping users quickly find what they're looking for and providing an organized shopping experience.
 

6. Contact Us Page: The Contact Us Page provides an accessible contact form where users can reach out with any questions or concerns. This page also includes relevant contact information for customer support.
 
Key Features
1. FIlter Changes Saved
Now when you want to visit other pages on our websites it automatically changes the filter that you have applied to products, including category of the product and its price range! It ensures our users to browse our website freely without having a concern about filtering the products that they actually need! :]
2. Light/Dark Mode
Beauty Hub includes a Light/Dark Mode feature that enhances user experience by providing a customizable visual interface. This toggle allows users to switch between two themes — light mode for a brighter, classic look, and dark mode for a softer, visually restful alternative.
Upon selecting a theme, the choice is immediately reflected across the website. The system then saves the user's theme preference using localStorage, enabling the website to remember the selection across sessions. When users revisit the website, their selected theme is automatically applied without any further action needed, preserving the continuity of their preferred visual experience.
The Light/Dark Mode also works seamlessly with other UI elements, adapting page backgrounds, text colors, and icons to maintain readability and contrast in each theme. This functionality is integral to a modern, user-centered design, ensuring that Beauty Hub is both visually appealing and comfortable to navigate at any time of day.
This feature was implemented by listening for the user's theme selection and saving it in localStorage through a simple JavaScript function. Each page loads with a check on this stored setting, so the user experience remains consistent whether they are visiting from the same device later or after a page refresh.
3. User Authentication: Login and Logout

Beauty Hub includes a User Authentication feature that provides a secure and personalized user experience by allowing users to log in and log out seamlessly. This system enables users to enter their credentials to access exclusive sections of the website and save their session information directly to local storage. This functionality is designed to remember user details across sessions, ensuring that users stay logged in even after refreshing the page or returning later.
When a user logs in, their information is securely stored in local storage, allowing the website to recognize and welcome them back automatically. If users choose to log out, their session data is immediately cleared, keeping their information private and ensuring a fresh start each time.
The User Authentication feature operates through an interactive login icon that brings up a modal with an intuitive, visually appealing form for entering credentials. This login/logout modal is styled to align with Beauty Hub’s aesthetic, enhancing the interface’s overall polish. The authentication system plays a crucial role in tailoring the user experience, making the Beauty Hub environment both accessible and secure for returning users.
This functionality was implemented using a simple JavaScript function that listens for user actions and manages session data in local storage. With this setup, Beauty Hub provides a consistent and effortless login experience, ensuring a smooth, user-friendly transition across sessions.
 

Setup Instructions
1.	Clone the repository: git clone https://github.com/onigirisum/beauty-hub.git
2.	Navigate to the project directory: cd beauty-hub
3.	Open index.html in your browser to view the website.

Installation and Setup
Requirements
•	HTML, CSS, JavaScript
•	Local storage support (built into modern browsers)

Authors and Acknowledgments
Project developed by:
•	Akerke Kassymbekova
•	Ainur Ali
•	Darina Abdukadyrova
License
This project is licensed under the MIT License.
