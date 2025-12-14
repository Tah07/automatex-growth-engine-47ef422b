import { motion } from "framer-motion";
import { Clock, UserMinus, Brain, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Wasting Hours on Manual Outreach",
    description: "Spending countless hours sending emails and messages that rarely get responses.",
  },
  {
    icon: UserMinus,
    title: "Missing Hot Leads",
    description: "Potential clients slip through the cracks because you can't respond fast enough.",
  },
  {
    icon: Brain,
    title: "Forgetting Follow-ups",
    description: "Important prospects go cold because follow-up emails never get sent.",
  },
  {
    icon: DollarSign,
    title: "Paying for Expensive VAs",
    description: "Hiring virtual assistants that cost hundreds per month with inconsistent results.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Most business owners struggle with the same challenges when it comes to 
            getting new clients consistently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-bordered text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
