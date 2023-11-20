export const email = [
  {
    type: "email",
    message: "البريد الالكتروني غير صحيح",
  },
  {
    required: true,
    message: "البريد الالكتروني مطلوب ",
  },
];
export const password = [
  {
    required: true,
    message: "كلمة السر مطلوب",
  },
  {
    min: 8,
    message: " كلمة السر يجب ان لا يقل عن 8 احرف ",
  },
  {
    pattern: /(?=.*\d)/,
    message: "يجب ان تحتوي علي رقم",
  },
  {
    pattern: /(?=.*[A-Z])/,
    message: "يجب ان تحتوي علي حرف كبير",
  },
  {
    pattern: /(?=.*[a-z])/,
    message: "يجب ان تحتوي علي حرف صغير",
  },
];

export const required = [
  {
    required: true,
    message: "مطلوب",
  },
];
