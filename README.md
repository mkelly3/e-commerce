# ORM E-commerce

## Description 
This project is a mysql databased and application backend for an e-commercesite. Within the MySQL database ecommerce_db a table was created from the model folders Product, Category, Tag and ProductTag. The user is able to test all of the api routes, GET, POST, PUT and DELETE through insomnia. The application was devleoped using MYSQL2, Express, Sequelize and dotenv. 
  

## Table of Contents
- [Description](#description)
- [Video](#walk-through-video)
- [Code Snippet](#code-snippet)
- [Technologies Used](#technologies-used)
- [Installation](#instalation)
- [Contact Information](#contact-information)


## Walk Through Video 
[Walk Through Video](https://drive.google.com/file/d/1ICyQfmMSTozrp7aB9YnOPaZhq976M4Oj/view)

## Code Snippet
The code displayed is used to get the category data based on a specific id. The async await method is used to promisfy the route. Additionally, the specific category being found will also include the product that corresponds to the category id. 

```
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {include: Product });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category by this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
```


## Technologies Used
- JavaScript
- Node.Js
- MySQL
- Express.Js

## Instalation
- inquirer
- mysql2
- dotenv
- sequelize

## Contact Information 
- [GitHub](https://github.com/mkelly3/)
- [Linkedin](https://www.linkedin.com/in/morgan-kelly15/)