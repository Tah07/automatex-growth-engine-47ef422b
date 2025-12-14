import { motion } from "framer-motion";
import { Shield, Key, Eye, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: Key,
    title: "Google OAuth Only",
    description: "We never see or store your password. Authentication happens directly with Google.",
  },
  {
    icon: Shield,
    title: "Industry-Standard Security",
    description: "Enterprise-grade encryption and secure infrastructure protect your data.",
  },
  {
    icon: Eye,
    title: "Revoke Access Anytime",
    description: "You're always in control. Remove our access from your Google account with one click.",
  },
  {
    icon: Lock,
    title: "Data Privacy Focused",
    description: "We don't sell your data. Your business information stays confidential.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Security is Our Priority
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We understand that connecting your Google account is a big step. 
              That's why we've built AutomateX with security and privacy at its core.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                {/* Google OAuth illustration */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sign in with Google</p>
                    <p className="text-sm text-muted-foreground">Secure OAuth 2.0</p>
                  </div>
                  <div className="ml-auto">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                {/* Permissions */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Requested permissions:</p>
                  <div className="space-y-2">
                    {["Send emails on your behalf", "View email messages", "Manage calendar events"].map((perm) => (
                      <div key={perm} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {perm}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground border-t border-border pt-4">
                  You can revoke these permissions at any time from your Google Account settings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
