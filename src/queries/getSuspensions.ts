import request, { gql } from "graphql-request";
import { fetchAccessToken } from "@/lib/fetchAccessToken";
import { unstable_noStore as noStore } from "next/cache";

const query = gql`query TimeSeriesQuery(
  $suspensionsCountMetricID: ID!
  $suspensionsPer100MetricID: ID!
  $studentsOnRollMetricID: ID!
  $timeZone: String = "UTC"
  $granularity: TimeSeriesGranularity = MONTH
  $startThisYear: DateTime!
  $stopThisYear: DateTime!
  $startLastYear: DateTime!
  $stopLastYear: DateTime!
  $academicYearThis: String!
  $academicYearLast: String!
) {
  suspensionsCountSecondary:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "PHASE = 'Secondary'"
  }) {
    value
  }
  suspensionsRateSecondary:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "PHASE = 'Secondary'"
  }) {
    value
  }

  suspensionsCountPrimary:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "PHASE = 'Primary'"
  }) {
    value
  }
  suspensionsRatePrimary:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "PHASE = 'Primary'"
  }) {
    value
  }

  suspensionsCountBoys:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "SEX_CODE = 'MALE'"
  }) {
    value
  }
  suspensionsRateBoys:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "PHASE = 'MALE'"
  }) {
    value
  }

  suspensionsCountGirls:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "SEX_CODE = 'FEMALE'"
  }) {
    value
  }
  suspensionsRateGirls:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "PHASE = 'FEMALE'"
  }) {
    value
  }
  suspensionsCountFSM:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "FSM = 1"
  }) {
    value
  }
  suspensionsRateFSM:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "FSM = 1"
  }) {
    value
  }

  suspensionsCountSENSupport:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "SEN_SUPPORT = 1"
  }) {
    value
  }
  suspensionsRateSENSupport:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "SEN_SUPPORT = 1"
  }) {
    value
  }

  suspensionsCountEHCP:counter(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    timeRange: {
        start: $startThisYear
        stop: $stopThisYear
    },
    filterSql: "EDUCATION_HEALTH_CARE_PLAN = 1"
  }) {
    value
  }
  suspensionsRateEHCP:counter(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    timeRange: {
      start: $startThisYear
      stop: $stopThisYear
    },
    filterSql: "EDUCATION_HEALTH_CARE_PLAN = 1"
  }) {
    value
  }

  yourSchoolsReportOnRoll:leaderboard(input: {
    metric: {
      id: $studentsOnRollMetricID
    },
    sort: DESC,
    rowLimit: 100,
    dimensions: [
      {
        columnName: "APPLICATION_ID"
      }
    ],
  }) {
    headers
    rows
  }

yourSchoolsReportSuspensionCount:leaderboard(input: {
    metric: {
      id: $suspensionsCountMetricID
    },
    sort: DESC,
    rowLimit: 100,
    dimensions: [
      {
        columnName: "SCHOOL_NAME"
      }
    ],
  }) {
    headers
    rows
  }

  yourSchoolsReportSuspensionRate:leaderboard(input: {
    metric: {
      id: $suspensionsPer100MetricID
    },
    sort: DESC,
    rowLimit: 100,
    dimensions: [
      {
        columnName: "SCHOOL_NAME"
      }
    ],
  }) {
    headers
    rows
  }

suspensionsThisYear: timeSeries(
    input: {
      metric: { id: $suspensionsCountMetricID }
      timeZone: $timeZone
      granularity: $granularity
      timeRange: {
        start: $startThisYear
        stop: $stopThisYear
      }
      filters: [
        {
        column: "ACADEMIC_YEAR_START_YEAR"
        operator: EQUALS
        value: $academicYearThis
        }
      ]
    }
  ) {
    labels
    values
  }

  suspensionsLastYear: timeSeries(
    input: {
      metric: { id: $suspensionsCountMetricID }
      timeZone: $timeZone
      granularity: $granularity
      timeRange: {
        start: $startLastYear
        stop: $stopLastYear
      }
      filters: [
        {
        column: "ACADEMIC_YEAR_START_YEAR"
        operator: EQUALS
        value: $academicYearLast
        }
      ]
    }
  ) {
    labels
    values
  }
}`

const getVariables = (academicYear: number) => ({
  "studentsOnRollMetricID": "MET06A68AAFD9SQZ8NC43JGKBGQMC",
  "suspensionsCountMetricID": "MET06A68APHPHR8H6SENTQNZ0WN58",
  "suspensionsPer100MetricID": "MET06A6AY7SH1VKQ99NZR3Q50ZZS0",
  "timeZone": "UTC",
  "granularity": "MONTH",
  "startThisYear": `${academicYear}-08-01`,
  "stopThisYear": `${academicYear + 1}-06-01`,
  "startLastYear": `${academicYear - 1}-08-01`,
  "stopLastYear": `${academicYear}-06-01`,
  "academicYearThis": academicYear.toString(),
  "academicYearLast": (academicYear - 1).toString()
})

interface SuspensionsResponse {
  suspensionsCountSecondary: {
    value: string;
  };
  suspensionsRateSecondary: {
    value: string;
  };
  suspensionsCountPrimary: {
    value: string;
  };
  suspensionsRatePrimary: {
    value: string;
  };
  suspensionsCountBoys: {
    value: string;
  };
  suspensionsRateBoys: {
    value: string;
  };
  suspensionsCountGirls: {
    value: string;
  };
  suspensionsRateGirls: {
    value: string;
  };
  suspensionsCountFSM: {
    value: string;
  };
  suspensionsRateFSM: {
    value: string;
  };
  suspensionsCountSENSupport: {
    value: string;
  };
  suspensionsRateSENSupport: {
    value: string;
  };
  suspensionsCountEHCP: {
    value: string;
  };
  suspensionsRateEHCP: {
    value: string;
  };
  suspensionsThisYear: {
    labels: string[];
    values: number[];
  };
  suspensionsLastYear: {
    labels: string[];
    values: number[];
  };
  yourSchoolsReportOnRoll: {
    headers: string[];
    rows: {
      [key: string]: string;
    }[];
  };
  yourSchoolsReportSuspensionCount: {
    headers: string[];
    rows: {
      [key: string]: string;
    }[];
  };
  yourSchoolsReportSuspensionRate: {
    headers: string[];
    rows: {
      [key: string]: string;
    }[];
  };
}

export default async function getSuspensions(academicYear: number = new Date().getFullYear()): Promise<SuspensionsResponse> {
  noStore()

  const accessToken = await fetchAccessToken();

  const apiUrl = process.env.PROPEL_API_URL
  if (!apiUrl) {
    throw new Error("PROPEL_API_URL is not set");
  }

  const variables = getVariables(academicYear)

  const data = await request<SuspensionsResponse>(apiUrl, query, variables, {
    Authorization: `Bearer ${accessToken}`
  });

  return data;
}