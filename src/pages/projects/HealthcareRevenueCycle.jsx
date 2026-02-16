import React from "react";
import { ProjectLayout } from "../../components/layout/ProjectLayout";

const HealthcareRevenueCycle = () => {
  return (
    <ProjectLayout
      title="Healthcare Revenue Cycle Analytics Dashboard"
      context="Healthcare finance teams needed visibility into denials, accounts receivable aging, and revenue leakage to prioritize corrective actions."
      tools={["Power BI", "Excel"]}
      repoUrl="https://github.com/abranco0403/data-analytics-portfolio/tree/main/healthcare-revenue-cycle-analytics"
    >
      <section className="space-y-10">
        <div>
          <h2 className="section_title">Business Questions</h2>
          <ul className="section_list">
            <li>Where are denials and revenue leakage occurring?</li>
            <li>Which payers contribute most to delayed collections?</li>
            <li>How is AR aging trending over time?</li>
          </ul>
        </div>

        <div>
          <h2 className="section_title">KPIs Tracked</h2>
          <ul className="pill_list">
            <li>Denial Rate</li>
            <li>Days in AR</li>
            <li>AR Aging Buckets</li>
            <li>Payer Mix</li>
            <li>Revenue at Risk</li>
          </ul>
        </div>

        <div>
          <h2 className="section_title">Approach</h2>
          <ol className="section_list list-decimal pl-5">
            <li>Standardized revenue cycle KPIs with finance context.</li>
            <li>Modeled claims-style data for analytics reporting.</li>
            <li>Built dashboards to surface risk and exceptions.</li>
            <li>Enabled payer and service-level drilldowns.</li>
          </ol>
        </div>

        <div>
          <h2 className="section_title">Outcomes</h2>
          <ul className="section_list">
            <li>Improved identification of denial and AR risk drivers.</li>
            <li>Focused follow-up on high-impact payers.</li>
            <li>Reduced time spent on manual revenue analysis.</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default HealthcareRevenueCycle;
