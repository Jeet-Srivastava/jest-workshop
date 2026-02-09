# Jest Workshop Submission

## Student Details
- Name: Jeet Srivastava
- Roll Number: 2024-B-16062005
- GitHub Username: Jeet-Srivastava

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: Check for no coupon
**What it protects against:** Ensures the function returns the subtotal unchanged when no coupon is provided

---

### 2. Test Name: SAVE10 coupon gives 10% discount
**What it protects against:** Verifies that the SAVE10 coupon correctly applies a 10% discount to the subtotal

---

### 3. Test Name: FLAT50 boundary case
**What it protects against:** Tests edge case where flat discount equals the subtotal, ensuring it doesn't go negative

---

### 4. Test Name: Coupon should be case insensitive
**What it protects against:** Validates that coupon codes work regardless of case (lowercase/uppercase variations)

---

### 5. Test Name: Check for invalid sub total
**What it protects against:** Ensures the function throws an error when negative subtotals are provided  

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No)
- GitHub Actions Run URL:

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?