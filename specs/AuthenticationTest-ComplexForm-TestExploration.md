# Authentication Test Exploration

## Application Overview

Live exploratory test results for the AuthenticationTest complex login flow, including actual outcomes, observations, and issue notes.

## Test Scenarios

### 1. Exploratory results

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login page field verification

**File:** `specs/AuthenticationTest-ComplexForm-TestExploration.md`

**Steps:**
  1. Open the complex authentication login page.
    - expect: Page loaded at https://authenticationtest.com/complexAuth/.
    - expect: E-mail field, Password field, dropdown selection, checkbox, and Log In button were present.

#### 1.2. Successful login

**File:** `specs/AuthenticationTest-ComplexForm-TestExploration.md`

**Steps:**
  1. Enter valid credentials and submit the login form.
    - expect: The application redirected to https://authenticationtest.com/loginSuccess/.
    - expect: A success message appeared: 'Success! You are now logged in!'.
    - expect: A Sign Out link is available.
    - expect: Screenshot saved as specs/auth-page-success.png.

#### 1.3. Failed login with invalid credentials

**File:** `specs/AuthenticationTest-ComplexForm-TestExploration.md`

**Steps:**
  1. Enter invalid credentials and submit the login form.
    - expect: The application redirected to https://authenticationtest.com/loginFail/.
    - expect: A failure message appeared: 'Sorry -- You have not successfully logged in.'
    - expect: Screenshot saved as specs/auth-page-failure.png.

#### 1.4. Invalid email format validation

**File:** `specs/AuthenticationTest-ComplexForm-TestExploration.md`

**Steps:**
  1. Enter invalid e-mail format and attempt to submit the form.
    - expect: The form remained on the same page with URL https://authenticationtest.com/complexAuth/.
    - expect: The E-mail input validity state was false with typeMismatch=true.
    - expect: No server-side login success or failure page loaded.
    - expect: Screenshot saved as specs/auth-page-invalid-email.png.

#### 1.5. Missing mandatory fields behavior

**File:** `specs/AuthenticationTest-ComplexForm-TestExploration.md`

**Steps:**
  1. Submit the form with empty fields.
    - expect: The application redirected to https://authenticationtest.com/loginFail/.
    - expect: No client-side required-field blocking was observed.
    - expect: Screenshot saved as specs/auth-page-empty-fields.png.

#### 1.6. Sign out behavior

**File:** `specs/AuthenticationTest-ComplexForm-TestExploration.md`

**Steps:**
  1. Click the Sign Out link after successful login.
    - expect: The application redirected to https://authenticationtest.com/.
    - expect: The site returned to the landing homepage, not directly to the complex auth form.
    - expect: The login form can be reopened by navigating back to /complexAuth/.
