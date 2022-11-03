# ORM E-commerce

## Description 
This application uses the command line to have users input information about departments, roles and employees. The user is first prompted to either view the department, role or employee table, add an employee, department or role and finally the user can update information about the employees role or manager. Additionally, when the user views any othe options a table is displayed with the command line.
  

## Table of Contents
- [Description](#description)
- [Video](#walk-through-video)
- [Code Snippet](#code-snippet)
- [Technologies Used](#technologies-used)
- [Installation](#instalation)
- [Contact Information](#contact-information)


## Walk Through Video 
[Walk Through Video](https://drive.google.com/file/d/1OqqDVa7mHg9yIGeP4X6gWRA5FHOzQSf1/view)

## Code Snippet

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