import React from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactMethods() {
  const startChat = () => {
    // Intercom
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Intercom) {
      // @ts-ignore
      window.Intercom('show');
      return;
    }
    // Crisp
    // @ts-ignore
    if (typeof window !== 'undefined' && window.$crisp) {
      // @ts-ignore
      window.$crisp.push(['do', 'chat:open']);
      return;
    }
    // Tawk.to
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Tawk_API) {
      // @ts-ignore
      window.Tawk_API.maximize();
      return;
    }
    alert('Live chat is not available at the moment. Please email support@enzo4ex.com.');
  };
  const items = [
    {
      title: "Live chat",
      desc: "Chat with our team 24/7 for instant assistance.",
      Icon: MessageCircle,
      action: { label: "Start chat", onClick: startChat },
    },
    {
      title: "Email",
      desc: "We typically respond within a few hours.",
      Icon: Mail,
      action: { label: "support@enzo4ex.com", href: "mailto:support@enzo4ex.com" },
    },
    {
      title: "Phone",
      desc: "Connect to your regional support desk.",
      Icon: Phone,
      action: { label: "+971 (04) 448 4229", href: "tel:+971044484229" },
    },
  ];

  return (
    <section className="relative mt-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ title, desc, Icon, action }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                {action.href ? (
                  <a href={action.href} className="mt-2 inline-flex text-sm text-purple-700 hover:text-purple-800">{action.label}</a>
                ) : (
                  <button onClick={action.onClick} type="button" className="mt-2 inline-flex text-sm text-purple-700 hover:text-purple-800">{action.label}</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
