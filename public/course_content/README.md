# Course Content

This directory contains the markdown files for each day of the ISTQB AI Testing Course.

## File Naming Convention

Each file follows the naming pattern: `Day X_ Title of the Day.md`

Example: `Day 1_ Introduction to AI and AI Testing Fundamentals.md`

## Adding or Updating Content

1. Create or edit the markdown file for the specific day
2. Use standard markdown syntax for formatting
3. For code blocks, use triple backticks with the language specified:
   ```python
   def example():
       print("Hello, World!")
   ```
4. Images should be placed in the `public/images` directory and referenced with a relative path:
   ```markdown
   ![Image Description](/images/example.png)
   ```

## Best Practices

- Keep lines under 100 characters for better readability
- Use second-level headers (`##`) for main sections
- Use third-level headers (`###`) for subsections
- Use bullet points for lists of items
- Use numbered lists for step-by-step instructions
- Use blockquotes for important notes or warnings

## Previewing Changes

1. The development server will automatically reload when you make changes
2. Navigate to the corresponding day in the course to see your changes
3. Make sure to test all links and interactive elements

## Deployment

When deploying the application, ensure that all markdown files are included in the build output. The files in the `public` directory will be served as static assets.
