import React from "react";
import { ProjectLayout } from "../../components/layout/ProjectLayout";

const RetailOpsDashboard = () => {
  return (
    <ProjectLayout
      title="Retail Operations Performance Dashboard"
      context="Retail and ecommerce leadership needed consistent KPI visibility across channels to support weekly planning, execution, and performance reviews."
      tools={["Power BI", "SQL", "Excel"]}
      repoUrl="https://github.com/abranco0403/data-analytics-portfolio/tree/main/retail-operations-performance-dashboard"
    >
      <section className="space-y-10">
        <div>
          <h2 className="section_title">Business Questions</h2>
          <ul className="section_list">
            <li>How are in-store vs ecommerce sales trending week over week?</li>
            <li>Which categories drive revenue and margin changes?</li>
            <li>Where are inventory risks impacting sales?</li>
          </ul>
        </div>

        <div>
          <h2 className="section_title">KPIs Tracked</h2>
          <ul className="pill_list">
            <li>Revenue</li>
            <li>Orders</li>
            <li>AOV</li>
            <li>Units Sold</li>
            <li>Sell-through</li>
            <li>Stockouts</li>
          </ul>
        </div>

        <div>
          <h2 className="section_title">Approach</h2>
          <ol className="section_list list-decimal pl-5">
            <li>Defined KPI requirements with stakeholders.</li>
            <li>Modeled data into clean fact and dimension tables.</li>
            <li>Built DAX measures for trends and comparisons.</li>
            <li>Designed dashboards for weekly operational review.</li>
          </ol>
        </div>

        <div>
          <h2 className="section_title">Outcomes</h2>
          <ul className="section_list">
            <li>Improved cross-channel performance visibility.</li>
            <li>Reduced ad-hoc reporting and manual analysis.</li>
            <li>Enabled faster pricing, inventory, and staffing decisions.</li>
          </ul>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default RetailOpsDashboard;
