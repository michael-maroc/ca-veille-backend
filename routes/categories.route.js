var express = require("express");
const {
    getCategoriesById,
    getCategoriesByUserId,
    deleteCategoryById,
    createCategory,
    updateColorCategory,
    updateNameCategory,
    getPopularUsers,
    getUserArticles,
    createDefaultCategories,
    deleteFeedFromCategory,
    updateColorNameCategory,
} = require("../controllers/categories.controller");

var router = express.Router();
router.get("/home", getUserArticles);
// require query ids example : const ids = [1, 2, 3]; fetch(`/api/users?ids=${ids.join(',')}`);
router.get("/categoriesId", getCategoriesById);
// require query ids example : const ids = [1, 2, 3]; fetch(`/api/users?ids=${ids.join(',')}`);
router.get("/usersId", getCategoriesByUserId);
router.get("/populars", getPopularUsers);
router.post("/default", createDefaultCategories);
router.delete("/:categoryId", deleteCategoryById);
router.post("/newCategory", createCategory);
router.put("/color", updateColorCategory);
router.put("/name", updateNameCategory);
router.put("/update", updateColorNameCategory);
router.delete("/:categoryId/feed/:feedId", deleteFeedFromCategory);

module.exports = router;
