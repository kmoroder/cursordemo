#!/bin/bash
set -e

# Colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Fullstack Blog Setup (Next.js + Supabase)${NC}"
echo "This script will set up your blog project with Next.js and Supabase."

# Step 1: Create a temporary directory for Next.js initialization
echo -e "\n${GREEN}Step 1: Creating temporary directory for Next.js initialization...${NC}"
TEMP_DIR=$(mktemp -d)
echo "Temporary directory created at: $TEMP_DIR"

# Step 2: Initialize Next.js in the temporary directory
echo -e "\n${GREEN}Step 2: Initializing Next.js in temporary directory...${NC}"
cd $TEMP_DIR
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm

# Step 3: Copy Next.js files back to the current project directory
echo -e "\n${GREEN}Step 3: Copying Next.js files to project directory...${NC}"
cd -
# Create an array of config files to preserve
CONFIG_FILES=(".nvmrc" ".npmrc" ".cursorrules" "README.md")

# Copy all files from temp directory except for those in CONFIG_FILES
rsync -av --progress $TEMP_DIR/ ./ --exclude={".git"} --exclude=node_modules

# Create environment files
echo -e "\n${GREEN}Step 5: Creating environment files...${NC}"
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
EOF

cat > .env.example << EOF
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
EOF

# Clean up temporary directory
echo -e "\n${GREEN}Cleaning up...${NC}"
rm -rf $TEMP_DIR

echo -e "\n${BLUE}Setup complete!${NC}"
echo "Your Next.js + Supabase blog template is ready."
echo "Run 'npm run dev' to start the development server."