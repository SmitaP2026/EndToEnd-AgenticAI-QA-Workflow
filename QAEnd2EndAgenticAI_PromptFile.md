# QAEnd2EndAgenticAI_PromptFile

End- To -End QA Workflow  

## Workflow Overview
This prompt guides you through a complete 7-step workflow using AI Agents and MCP servers from reading User Story generating Test Plan, Automation scripts, Execution of script, Reporting and committing the artifacts to the GIT repository.

---

## Step 1 : Read User story  
**Prompt:**  
I need to start a new Testing Workflow, by reading User story from the md file located: \user_stories\AuthenticationTest_ComplexForm.md  
Summarize the key requirements, acceptance criteria and Testing scope  

**Expected Output:**  
- Summary of User story  
- List of Acceptance Criteria  
- Application URL and log in credentials  
- Key feature to Test  

---

## Step 2: Create Test Plan  
**Prompt:**  
Based on the User story, use the playwright-test-planner agent to do below tasks:
- Read the Application URL and log in credentials from User story
- Explore the application and understand all workflows in the acceptance criteria
- Create comprehensive test plan that covers all acceptance criteria
  - Happy Path Scenarios
  - Negative scenarios like Validation errors, Empty fields, invalid data
  - Edge Case and boundary conditions
  - Navigation flow tests
  - UI Element validation
- Save the test Plan in specs/ AuthenticationTest-ComplexForm-TestPlan.md

Ensure each test scenarios includes:
- Clear test case title
- Details test steps
- Expected Result for each action
- Test data requirements

**Expected Output:**  
- Complete Test Plan md file saved to specs/
- Organized clear test scenarios with detailed steps
- Browsing screenshots

---

## Step 3: Perform Exploratory Testing  
**Prompt:**  
This step I need to perform Exploratory Testing using Playwright MCP browser tools  
Please read the test plan from specs/AuthenticationTest-ComplexForm-TestPlan.md  

**Task:**
1. Use the Playwright MCP browser tools to manually execute the test scenarios defined in test plan
2. Follow test steps in each test case
3. Verify the expected result with actual result
4. Capture screenshots at key steps and error screens
5. Document your findings in this file (specs/ AuthenticationTest-ComplexForm-TestExploration.md) including:
   - Test execution results for each test scenarios
   - Any UI inconsistency and unexpected behavior
   - Missing validations or bugs discovered
   - Screenshots as evidence

**Expected Output:**
- Manual test execution results
- Screenshots of application at various states
- List of observations and findings
- Any issues discovered during exploration

---

## Step 4: Generate Automation Test Scripts  
**Prompt:**  
This step I need to create automated test scripts using Playwright-test-generator agent  

Please review:
1. Test plan (specs/AuthenticationTest-ComplexForm-TestPlan.md)
2. Exploration md file (specs/ AuthenticationTest-ComplexForm-TestExploration.md)

**Task:**
Using the insights from manual exploration testing:
- Leverage element selectors and locators used in Step 3
- Use stable element properties (IDs, data attributes, roles)
- Apply wait strategies and UI behaviors
- Incorporate workarounds for UI quirks discovered

Generate Playwright Type scripts automation:
1. Create test scripts for each test scenario
2. Organize into tests/AuthenticationTest-ComplexForm/
3. Use reliable selectors from exploration

Each script should:
- Follow Playwright best practices
- Use proper assertions with expect()
- Include comments for complex steps
- Apply wait strategies
- Use hooks (beforeEach, afterEach)
- Support Chrome browsers

**Expected Output:**
- Test suite files in tests/AuthenticationTest-ComplexForm/
- Initial test generation complete

---

## Step 5 : Execute and Heal Automation Tests  
**Prompt:**  
Execute generated scripts and heal failures using Playwright-test-healer agent  

**Task:**
1. Run all scripts
2. Identify failing tests
3. Heal failures by analyzing:
   - Selector issues
   - Synchronization
   - Assertion failures
4. Re-run tests
5. Repeat until stable

Document:
- Initial results
- Healing activities
- Final results
- Unresolved tests

**Expected Outputs:**
- All scripts executed
- Final results in tests/AuthenticationTest-ComplexForm/
- Healing summary

---

## Step 6: Generate Test Execution Report  
**Prompt:**  
Generate comprehensive report based on manual testing, automation, and healing.

---

## Step 7 : Commit to Git repository  
**Git Repository URL:** https://github.com/SmitaP2026/AuthenticationTest-ComplexForm  

**Prompt:**  
Commit all test artifacts using Github MCP server

**Tasks:**
1. Initialize repository if needed
2. Stage all files
3. Create commit with message:
   - "feat(test): Add complete test suite for AuthenticationTest-ComplexForm checkout workflow"
   - Add User story documentation
   - Add Test Plan
   - Add Test execution Report
   - Add automated test scripts
   - Resolves AuthenticationTest-ComplexForm

---
