// This utility helps load markdown files from the public directory
export const loadMarkdown = async (path) => {
  try {
    // In Vite, files in public directory are served from the root
    // We need to ensure the path is correct for both dev and production
    const basePath = ''; // Files in public are served from root
    const fullPath = `${basePath}${path}`;
    console.log('Loading markdown from:', fullPath);
    
    const response = await fetch(fullPath);
    
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown:', error);
    throw error;
  }
};

// Predefined paths for each day's content
export const DAY_CONTENT_PATHS = {
  1: '/course_content/Day 1_ Introduction to AI and AI Testing Fundamentals.md',
  2: '/course_content/Day 2_ Data for AI Testing.md',
  3: '/course_content/Day 3_ Model Testing and Evaluation.md',
  4: '/course_content/Day 4_ Operational AI Testing and System Integration.md',
  5: '/course_content/Day 5_ Organizational Aspects, Ethics, and Exam Preparation.md'
};
