# Authentication Complex Form Test Plan

## Application Overview

Comprehensive QA test plan for the AuthenticationTest complex login flow at https://authenticationtest.com/complexAuth/. Covers happy path, negative validation, UI verification, and navigation flow.

## Test Scenarios

### 1. Authentication test scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify login page and form elements

**File:** `specs/AuthenticationTest-ComplexForm-TestPlan.md`

**Steps:**
  1. Open https://authenticationtest.com/complexAuth/.
    - expect: The login page loads with title 'Authentication Test'.
    - expect: The E-mail field labeled 'E-Mail Address' is visible and editable.
    - expect: The Password field labeled 'Password' is visible and editable.
    - expect: The drop-down labeled 'Make a Selection' is visible with options 'Don't Log Me In' and 'Please Log Me In'.
    - expect: The checkbox labeled 'I love form manipulation!' is visible.
    - expect: The Log In submit button is visible.

#### 1.2. Successful login with valid credentials

**File:** `specs/AuthenticationTest-ComplexForm-TestPlan.md`

**Steps:**
  1. Click the Log In button.
    - expect: The user is authenticated successfully.
    - expect: The page shows a signed-in state or a success page.
    - expect: A Sign Out button or similar sign-out link is visible.
    - expect: No login error messages appear.

#### 1.3. Unsuccessful login with invalid credentials

**File:** `specs/AuthenticationTest-ComplexForm-TestPlan.md`

**Steps:**
  1. Click the Log In button.
    - expect: Login is rejected.
    - expect: A visible login failure message is displayed.
    - expect: The user remains on the login page or is redirected back to it.
    - expect: No signed-in state or Sign Out button is visible.

#### 1.4. Invalid E-mail format validation

**File:** `specs/AuthenticationTest-ComplexForm-TestPlan.md`

**Steps:**
  1. Click the Log In button or move focus away from the E-mail field.
    - expect: The page indicates that the E-mail format is invalid.
    - expect: A validation message or browser tooltip appears for the E-mail field.
    - expect: The user cannot proceed until the E-mail is corrected.

#### 1.5. Required field validation

**File:** `specs/AuthenticationTest-ComplexForm-TestPlan.md`

**Steps:**
  1. Click the Log In button.
    - expect: A validation error message appears identifying the missing required field.
    - expect: The user cannot complete login until all required fields are filled.

#### 1.6. Sign out and return to login form

**File:** `specs/AuthenticationTest-ComplexForm-TestPlan.md`

**Steps:**
  1. Click the Sign Out button or link if available.
    - expect: The user returns to the login page.
    - expect: The login form is visible again.
    - expect: Signed-in content is no longer shown.
    - expect: The user can attempt login again.
