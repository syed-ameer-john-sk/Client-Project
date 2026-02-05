# How to Add New Job Opportunities

This guide explains how to add, edit, or remove job postings on the Consultant sur Mesure careers page.

## Overview

Job postings are managed through **Supabase**, a cloud database. The careers page automatically fetches and displays all active jobs from the database.

## Adding a New Job

### Step 1: Access Supabase Dashboard
1. Go to [supabase.com](https://supabase.com) and log in
2. Select the **Consultant sur Mesure** project
3. Navigate to **Table Editor** in the left sidebar
4. Click on the **jobs** table

### Step 2: Create New Job Entry
Click the **+ Insert row** button and fill in:

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Job title | "Senior Clinical Research Associate" |
| `location` | Work location | "Paris, France" |
| `type` | Employment type | "Full-time" or "Part-time" or "Contract" |
| `department` | Department name | "Clinical Operations" |
| `description` | Job description | "Monitoring clinical trials..." |
| `requirements` | Key requirements | "5+ years experience, ICH-GCP certified" |
| `is_active` | Show on website | `true` to display, `false` to hide |

### Step 3: Save
Click **Save** - the job will appear on the careers page within seconds.

## Editing Existing Jobs

1. Find the job in the **jobs** table
2. Click on the row to edit
3. Make changes and click **Save**

## Removing Jobs

**Option 1 - Hide (Recommended):**
- Set `is_active` to `false`
- Job stays in database but won't display

**Option 2 - Delete:**
- Select the row and click **Delete**
- Job is permanently removed

## Job Application Flow

All "Apply Now" buttons link to this Google Form:
```
https://docs.google.com/forms/d/e/1FAIpQLScaseE8_vRlV8JcET0e0dINChAZ9fXOjQZGxdkzuuQLT9lYkA/viewform
```

Applications go directly to your Google Forms responses.

## Need Help?

Contact your web administrator for Supabase access credentials.
