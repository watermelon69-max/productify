import { Router } from "express";
import { requireAuth } from "@clerk/express";
import * as productController from "../controllers/productController";

const router = Router();

// GET /api/products =>Get all products (public route)
router.get("/", productController.getAllProducts);

//Get /api/products/my - Get current user's products(protected)
router.get("/my", requireAuth(), productController.getMyProdcuts);

// GET /api/products/:id - Get single product by ID (public)
router.get("/:id", productController.getProductById);

// POST /api/products - Create new product (protected)
router.post("/", requireAuth(), productController.createProduct);

// PUT /api/products/:id - Update product (protected - owner only)
router.put("/:id", requireAuth(), productController.updateProduct);

// DELETE /api/products/:id - Delete product (protected - owner only)
router.delete("/:id", requireAuth(), productController.deleteProduct);

export default router;
