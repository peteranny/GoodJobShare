export const getJobTitleQuery = `
query($jobTitle: String!) {
  job_title(name: $jobTitle) {
    interview_experiences {
      id
      type
      company {
        name
      }
      job_title {
        name
      }
      region
      experience_in_year
      education
      salary {
        amount
        type
      }
      title
      sections {
        subtitle
        content
      }
      created_at
      reply_count
      like_count
      overall_rating
    }
    salary_work_times {
      id
      week_work_time
      salary {
        type
      }
    }
    salary_work_time_statistics {
      count
      average_estimated_hourly_wage
      average_week_work_time
      is_overtime_salary_legal_count {
        yes
        no
        unknown
      }
      has_compensatory_dayoff_count {
        yes
        no
        unknown
      }
      has_overtime_salary_count {
        yes
        no
        unknown
      }
    }
  }
}
`;
