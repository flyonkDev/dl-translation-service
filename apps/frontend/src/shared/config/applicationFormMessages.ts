export const applicationFormMessages = {
  // --- Driver details (Zod schema)
  driver: {
    firstName: 'Enter your first name',
    lastName: 'Enter your last name',
    email: 'Invalid email',
    phone: 'Enter your phone number',
    dobRequired: 'Required',
    dobAge: 'You must be 18+',
    licenseCountry: 'Required',
    licenseCategories: 'Select at least one category',
    sex: 'Select your sex',
  },

  // --- Verify section (inline errors)
  verify: {
    headshotRequired: 'Headshot is required',
    licenseFileRequired: "Driver's license file is required",
    signatureRequired: 'Signature is required',
    termsRequired: 'You must accept the terms',
    verificationFailed: 'Verification failed — please upload a clearer photo/scan',
    couldNotVerify: 'Could not verify — please try again',
  },

  // --- Toasts (page / submit flow + verification flow)
  toast: {
    incompleteFields:
      'Please complete all required fields: headshot, license scan, signature, and accept the terms.',
    verificationMissing: 'Verification is missing. Please upload your license again.',
    verificationIdMissing: 'Verification id is missing. Please re-upload the license.',
    verificationFailedSubmit: 'Verification failed. Please re-upload clearer images or check hints.',
    applicationCreated: 'Application created ✅',
    applicationSubmitError: 'Could not submit application. Please try again.',
    // Verification flow (useVerificationFlow)
    licensePassed: 'Driver License looks good ✅',
    licenseReview: 'We can proceed, but we may need manual review ⚠️',
    licenseFailed: 'Verification failed — please re-upload a clearer image ❌',
    verifyError: 'Could not verify right now. Please try again.',
    // File precheck (align with backend limits)
    headshotInvalid: 'Headshot must be JPG, PNG or WebP, max 10 MB.',
    licenseInvalid: 'License must be JPG, PNG, WebP or PDF, max 15 MB.',
    // Face match (backend returns code HEADSHOT_MISMATCH)
    headshotMismatch:
      "Photo doesn't match the person on the driver's license. Please use a clear photo of your face.",
  },
} as const;
