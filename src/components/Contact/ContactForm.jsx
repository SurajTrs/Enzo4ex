import React from "react";

const regions = [
  "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua And Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia And Herzegovinia","Botswana","BouvetIsland","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Keeling Islands","Colombia","Comoros","Congo","Congo Dem Republic","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands Malvinas","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey And Alderney","Guinea","Guinea Bissau","Guyana","Haiti","Heardand McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Island Of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea Democratic Republic Of","Korea Republic Of","Kosovo","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldavia","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","NewCaledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Macedonia","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Re Union","Republic Of Dominica","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts And Nevis","Saint Lucia","Saint Martin","Saint Pierre And Miquelon","Saint Vincent And The Grenadines","Samoa","San Marino","Sao Tome And Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard And Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad And Tobago","Tunisia","Turkey","Turkmenistan","Turks And Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States Minor Outlying Islands","Uruguay","USA","Uzbekistan","Vanuatu","HolySee","Venezuela","Vietnam","Virgin Islands British","Virgin Islands US","Wallisand Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe"
];

export default function ContactForm() {
  const [form, setForm] = React.useState({
    region: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
    accept: false,
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.region) errs.region = "Please select your region.";
    if (!form.lastName.trim()) errs.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Please enter your phone number.";
    if (!form.inquiry) errs.inquiry = "Select an inquiry type.";
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = "Please provide more details (min 10 characters).";
    if (!form.accept) errs.accept = "You must accept the Privacy Policy.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      // Simulate network request. Replace with real API call.
      await new Promise((res) => setTimeout(res, 900));
      setSubmitted(true);
      console.log("Contact form submitted", form);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-6 text-purple-900">
        <h3 className="font-semibold text-lg">Thanks for contacting Enzo4ex</h3>
        <p className="text-sm">Our support team will get back to you shortly.</p>
        <p className="mt-2 text-xs text-purple-800">Reference ID: {Math.random().toString(36).slice(2, 9).toUpperCase()}</p>
      </div>
    );
  }

  return (
    <section className="relative mt-8">
      <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium text-slate-700">Region*</label>
          <select id="region" name="region" value={form.region} onChange={onChange} required aria-invalid={!!errors.region} className={`mt-1 w-full border rounded-lg px-3 py-2 ${errors.region ? 'border-red-400' : 'border-slate-300'}`}>
            <option value="">Select your region</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.region && <p className="mt-1 text-xs text-red-600">{errors.region}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last name*</label>
          <input id="lastName" name="lastName" value={form.lastName} onChange={onChange} required aria-invalid={!!errors.lastName} className={`mt-1 w-full border rounded-lg px-3 py-2 ${errors.lastName ? 'border-red-400' : 'border-slate-300'}`} />
          {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email*</label>
          <input id="email" type="email" name="email" value={form.email} onChange={onChange} required aria-invalid={!!errors.email} className={`mt-1 w-full border rounded-lg px-3 py-2 ${errors.email ? 'border-red-400' : 'border-slate-300'}`} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone number*</label>
          <input id="phone" type="tel" name="phone" value={form.phone} onChange={onChange} required aria-invalid={!!errors.phone} className={`mt-1 w-full border rounded-lg px-3 py-2 ${errors.phone ? 'border-red-400' : 'border-slate-300'}`} placeholder="e.g. +971 4 448 4229" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700">Inquiry type*</label>
          <select id="inquiry" name="inquiry" value={form.inquiry} onChange={onChange} required aria-invalid={!!errors.inquiry} className={`mt-1 w-full border rounded-lg px-3 py-2 ${errors.inquiry ? 'border-red-400' : 'border-slate-300'}`}>
            <option value="">Select your inquiry type</option>
            <option>Support</option>
            <option>Account Opening</option>
            <option>Partners</option>
            <option>Compliance</option>
          </select>
          {errors.inquiry && <p className="mt-1 text-xs text-red-600">{errors.inquiry}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message*</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} required aria-invalid={!!errors.message} className={`mt-1 w-full border rounded-lg px-3 py-2 ${errors.message ? 'border-red-400' : 'border-slate-300'}`} />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>
        <div className="sm:col-span-2 flex items-center gap-2">
          <input id="accept" type="checkbox" name="accept" checked={form.accept} onChange={onChange} className="rounded border-slate-300" />
          <span className="text-sm text-slate-700">I acknowledge that I have received and read <a href="/privacy-policy" className="text-purple-700 hover:text-purple-800 underline">Enzo4ex's Privacy Policy</a></span>
        </div>
        {errors.accept && <p className="sm:col-span-2 -mt-2 text-xs text-red-600">{errors.accept}</p>}
        <div className="sm:col-span-2">
          <button type="submit" disabled={loading} className="inline-flex items-center px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm">
            {loading ? 'Submitting…' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
}
