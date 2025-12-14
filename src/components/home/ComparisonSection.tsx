import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Setup Time",
    automatex: "1-2 days",
    zapier: "Weeks of DIY",
    va: "Training weeks",
    agency: "2-4 weeks",
  },
  {
    feature: "Monthly Cost",
    automatex: "From $9/mo",
    zapier: "$50-500+/mo",
    va: "$500-2000+/mo",
    agency: "$2000-5000+/mo",
  },
  {
    feature: "Done-For-You",
    automatex: true,
    zapier: false,
    va: "Partial",
    agency: true,
  },
  {
    feature: "AI-Powered",
    automatex: true,
    zapier: false,
    va: false,
    agency: "Varies",
  },
  {
    feature: "24/7 Operation",
    automatex: true,
    zapier: true,
    va: false,
    agency: "Varies",
  },
  {
    feature: "No Technical Skills",
    automatex: true,
    zapier: false,
    va: true,
    agency: true,
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
        <Check className="w-4 h-4 text-green-600" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
        <X className="w-4 h-4 text-red-500" />
      </div>
    );
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Compare
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See why AutomateX is the smart choice for growing your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">
                  Feature
                </th>
                <th className="py-4 px-4 font-display font-semibold text-primary bg-primary/5 rounded-t-lg">
                  AutomateX
                </th>
                <th className="py-4 px-4 font-display font-semibold text-muted-foreground">
                  Zapier DIY
                </th>
                <th className="py-4 px-4 font-display font-semibold text-muted-foreground">
                  Virtual Assistant
                </th>
                <th className="py-4 px-4 font-display font-semibold text-muted-foreground">
                  Traditional Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center bg-primary/5">
                    <CellValue value={row.automatex} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.zapier} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.va} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.agency} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
