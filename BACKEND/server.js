const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken')

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "home_appliances"
});

db.connect((err) => {
    if (err) console.log(err);
    else console.log("Database Connected");
});


// Admin login route
app.post('/Adminpenal', (req, res) => {
    const { email, password } = req.body;
  
    db.query("SELECT * FROM admin WHERE email = ?", [email], (err, results) => {
      if (err) return res.status(500).send("Server Error");
      if (results.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
  
      const user = results[0];
      // Compare password (you can use bcrypt here to hash passwords)
      if (user.password !== password) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
  
      // Create a token
      const token = jwt.sign({ userId: user.id }, "your_jwt_secret", { expiresIn: "1h" });
      res.json({ success: true, token });
    });
  });




//get service provder
app.get("/serviceproviderslist", (req, res) => {
    db.query("SELECT * FROM service_provider", (err, results) => { 
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  });
  
  // Delete service provider
  app.delete("/serviceprovider/:id", (req, res) => {
    const serviceProviderId = req.params.id;
  
    db.query("DELETE FROM service_provider WHERE serviceprovider_id = ?", [serviceProviderId], (err, result) => { 
      if (err) {
        return res.send("Error deleting service provider");
      }
      res.send("Service provider deleted successfully");
    });
  });
// List of customers
app.get("/customerslist", (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Delete customer API
app.delete("/customer/:id", (req, res) => {
    const userId = req.params.id;

    db.query("DELETE FROM user WHERE user_id = ?", [userId], (err, result) => {
        if (err) {
            return res.send("Error deleting customer");
        }
        res.send("Customer deleted successfully");
    });
});

// Api for fetching complainlist
app.get("/complainlist", (req, res) => {
    db.query("SELECT * FROM complain", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Api for fetching feedbacklist
app.get("/feedbacklist", (req, res) => {
    db.query("SELECT * FROM feedback", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// ---------------------- Category Routes ----------------------

// Get all categories
app.get('/categories', async (req, res) => {
    try {
        db.query('SELECT * FROM product_category', (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error fetching categories' });
            }
            res.json(results);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching categories' });
    }
});

// Create a category
app.post('/categories', async (req, res) => {
    const { name, description } = req.body;
    try {
        db.query(
            'INSERT INTO product_category (productcategory_name, productcategory_description) VALUES (?, ?)',
            [name, description],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(400).json({ message: 'Error creating category' });
                }
                db.query('SELECT * FROM product_category WHERE productcategory_id  = ?', [result.insertId], (err, rows) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Error fetching created category' });
                    }
                    res.status(201).json(rows);
                });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error creating category' });
    }
});

// Update a category
app.put('/categories/:id', async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    try {
        db.query(
            'UPDATE product_category SET productcategory_name = ?, productcategory_description = ? WHERE productcategory_id = ?',
            [name, description, id],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(400).json({ message: 'Error updating category' });
                }
                db.query('SELECT * FROM product_category WHERE productcategory_id = ?', [id], (err, rows) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Error fetching updated category' });
                    }
                    res.json(rows);
                });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error updating category' });
    }
});

// Delete a category
app.delete('/categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        db.query('DELETE FROM product_category WHERE productcategory_id = ?', [id], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error deleting related subcategories' });
            }
            db.query('DELETE FROM product_category WHERE productcategory_id = ?', [id], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error deleting category' });
                }
                res.json({ message: 'Deleted Category' });
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting category' });
    }
});

// ---------------------- Subcategory Routes ----------------------

// Get subcategories by category ID
app.get('/categories/:categoryId/subcategories', async (req, res) => {
    const { categoryId } = req.params;
    try {
        db.query(
            'SELECT * FROM product_sub_category WHERE productcategory_id = ?',
            [categoryId],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error fetching subcategories' });
                }
                res.json(results);
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching subcategories' });
    }
});

// Create a subcategory
app.post('/categories/:categoryId/subcategories', async (req, res) => {
    const { name, description } = req.body;
    const { categoryId } = req.params;
    try {
        db.query(
            'INSERT INTO product_sub_category (p_sub_cata_name,	p_sub_cata_description, productcategory_id) VALUES (?, ?, ?)',
            [name, description, categoryId],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(400).json({ message: 'Error creating subcategory' });
                }
                db.query('SELECT * FROM product_sub_category WHERE productcategory_id = ?', [result.insertId], (err, rows) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Error fetching created subcategory' });
                    }
                    res.status(201).json(rows);
                });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error creating subcategory' });
    }
});

// Update a subcategory
app.put('/subcategories/:id', async (req, res) => {
    const { name, description, category_id } = req.body;
    const { id } = req.params;

    try {
        console.log("Updating subcategory with ID:", id); // Log the ID
        console.log("Update data:", { name, description, category_id }); // Log data

        db.query(
            'UPDATE product_sub_category SET p_sub_cata_name = ?, p_sub_cata_description = ?, productcategory_id = ? WHERE p_sub_cata_id = ?',
            [name, description, category_id, id],
            (err, result) => {
                if (err) {
                    console.error("Error updating subcategory:", err);
                    return res.status(500).json({ message: 'Error updating subcategory' }); 
                }

                console.log("Subcategory updated successfully. Rows affected:", result.affectedRows);

                res.json({ message: 'Subcategory updated' }); // Send a success message
            }
        );
    } catch (err) {
        console.error("Error updating subcategory:", err);
        res.status(500).json({ message: 'Error updating subcategory' }); // Correct status code
    }
});

// Delete a subcategory
app.delete('/subcategories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        db.query('DELETE FROM product_sub_category WHERE p_sub_cata_id = ?', [id], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error deleting subcategory' });
            }
            res.json({ message: 'Deleted Subcategory' });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting subcategory' });
    }
});

// ---------------------- Server Start ----------------------

app.listen(5000, () => {
    console.log("The Server is Running on port 5000..........");
});