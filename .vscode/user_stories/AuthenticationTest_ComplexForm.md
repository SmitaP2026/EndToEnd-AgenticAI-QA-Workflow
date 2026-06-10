# AuthenticationTest - ComplexForm

## User Story: REQ-001 - Log In Process to Authentication

### Story Title
Implement a complete log in flow that allows users to log in with E-mail and password with a selection of a drop-down and check box. Confirm the user logged in successfully. The login process should be intuitive, secure, and provide clear feedback at each step.

**Application URL:** https://authenticationtest.com/complexAuth/

---

## Test Credentials
- **E-Mail:** complex@authenticationtest.com  
- **Password:** pa$$w0rd  

---

## Acceptance Criteria

### AC1: Launch the website and field validation
- **Given** User opens the URL  
- **When** User navigates to log in page  
- **Then** User should see E-mail and password input fields, drop-down field, and check box  
- **And** User should be able to enter the required fields  

### AC2: Successful log in
- **Given** User is on log in page  
- **When** User provides valid E-mail and password, selects drop-down field as *"Please Log me in"* and checks the *"I love form manipulation!"* checkbox, then clicks **Log In** button  
- **Then** User should be logged in successfully  
- **And** User should see **Sign Out** button  

### AC3: Unsuccessful log in
- **Given** User is on log in page  
- **When** User provides invalid E-mail and password, selects drop-down field as *"Please Log me in"* and checks the *"I love form manipulation!"* checkbox, then clicks **Log In** button  
- **Then** User should not be logged in successfully and a log in failure message appears  
- **And** User should be redirected back to log in page  

### AC4: Error handling
- **Given** User is on log in page  
- **When** User provides invalid E-mail format  
- **Then** User should see an invalid tooltip message  
- **And** User should clear cache and return to log in page  

---

## Business Rules
- All log in form fields are mandatory  
- Users must be logged in successfully  

---

## Technical Notes
- Use Playwright for test automation  
- Test on Chrome browser 
- Validate all form validation messages  
- Test navigation flow and back button behavior  

---

## Definition of Done
- All acceptance criteria have test cases  
- Manual exploratory testing completed  
- Automated test scripts created and passing  
- Test results documented  
- Bugs logged for any failures  
- Code committed to repository  
