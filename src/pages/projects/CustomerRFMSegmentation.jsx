import React from "react";
import { ProjectLayout } from "../../components/layout/ProjectLayout";

const CustomerRFMSegmentation = () => {
  return (
    <ProjectLayout
      title="Customer Retention & Segmentation (RFM)"
      context="Marketing and operations teams needed a way to identify high-value and at-risk customers to guide retention and targeting strategies."
      tools={["Python", "Pandas", "Excel"]}
      repoUrl="https://github.com/abranco0403/data-analytics-portfolio/tree/main/customer-retention-segmentation-rfm"
    >
      <section className="space-y-10">
        <div>
          <h2 className="section_title">Business Questions</h2>
          <ul className="section_list">
            <li>Which customers generate the most long-term value?</li>
            <li>Who is at risk of churn based on recent behavior?</li>
            <li>How should customers be prioritized for retention?</li>
          </ul>
        </div>

        <div>
          <h2 className="section_title">KPIs & Metrics</h2>
          <ul className="pill_list">
            <li>Recency</li>
            <li>Frequency</li>
            <li>Monetary Value</li>
            <li>Segment Size</li>
          </ul>
        </div>

        <div>
          <h2 className="section_title">Approach</h2>
          <ol className="section_list list-decimal pl-5">
            <li>Cleaned and prepared transactional data.</li>
            <li>Calculated RFM scores per customer.</li>
            <li>Segmented customers by behavioral patterns.</li>
            <li>Translated segments into business actions.</li>
          </ol>
        </div>

        <div>
          <h2 className="section_title">Outcomes</h2>
          <ul className="section_list">
            <li>Clear identification of high-value customers.</li>
            <li>Early detection of churn-risk segments.</li>
            <li>Actionable targeting recommendations.</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default CustomerRFMSegmentation;
