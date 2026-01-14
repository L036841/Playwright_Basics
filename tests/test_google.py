import pytest
from playwright.sync_api import sync_playwright


def test_google_page_loads():
    """Test to verify Google page opens and loads correctly"""
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        
        # Navigate to Google
        page.goto("https://www.google.com")
        
        # Assert that the page title contains "Google"
        assert "Google" in page.title(), "Google page did not load correctly"
        
        # Assert that the search box is present
        search_box = page.locator('textarea[name="q"]')
        assert search_box.is_visible(), "Google search box is not visible"
        
        # Assert that the page URL is correct
        assert "google.com" in page.url, "URL is not Google"
        
        # Close browser
        browser.close()


if __name__ == "__main__":
    test_google_page_loads()
    print("✅ Test passed! Google page loaded successfully.")
