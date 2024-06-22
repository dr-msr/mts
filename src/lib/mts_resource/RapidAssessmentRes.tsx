export const criteria = [
	'Critical First Look',
	'Rapid Assessment - Breathing',
	'Rapid Assessment - SpO2',
	'Rapid Assessment - Circulation',
	'Rapid Assessment - Consciousness',
	'Rapid Assessment - Bleeding'
];

export const BreathingAssessment = [
    {
        "id": 1,
        "name": "Abnormal Sounds",
        "description": "Presence of abnormal breathing sounds.",
        "level": 1
    },
    {
        "id": 2,
        "name": "Excessive work of breathing, sweating",
        "description": "Labored breathing with visible effort and sweating.",
        "level": 1
    },
    {
        "id": 3,
        "name": "Cannot speak; one-word reply",
        "description": "Unable to speak more than one word at a time due to breathing difficulty.",
        "level": 1
    },
    {
        "id": 4,
        "name": "Confused, lethargic",
        "description": "Showing signs of confusion and lethargy.",
        "level": 1
    },
    {
        "id": 5,
        "name": "Require assisted breathing",
        "description": "Needs assistance to breathe.",
        "level": 1
    },
    {
        "id": 6,
        "name": "Difficulty to breathe",
        "description": "Experiencing difficulty in breathing.",
        "level": 2
    },
    {
        "id": 7,
        "name": "Short phrases only",
        "description": "Can speak only in short phrases due to breathlessness.",
        "level": 2
    },
    {
        "id": 8,
        "name": "Agitation, anxious",
        "description": "Showing signs of agitation and anxiety.",
        "level": 2
    },
    {
        "id": 9,
        "name": "Wheeze, expiratory rhonchi; airway intact",
        "description": "Presence of wheezing or expiratory rhonchi with an intact airway.",
        "level": 3
    },
    {
        "id": 10,
        "name": "Not breathless",
        "description": "No signs of breathlessness.",
        "level": 4
    }
];

export const Spo2Assessment = [
    {
        "id": 1,
        "name": "Require assisted breathing",
        "description": "Needs assistance to breathe.",
        "level": 1
    },
	{
        "id": 6,
        "name": "Requiring 02 support.",
        "description": "Oxygen saturation above 94% on room air.",
        "level": 3
    },
    {
        "id": 2,
        "name": "SpO2 < 90% room air",
        "description": "Oxygen saturation below 90% on room air.",
        "level": 1
    },
    {
        "id": 3,
        "name": "SpO2 90 - 92% room air",
        "description": "Oxygen saturation between 90% and 92% on room air.",
        "level": 2
    },
    {
        "id": 4,
        "name": "SpO2 92 - 94% room air",
        "description": "Oxygen saturation between 92% and 94% on room air.",
        "level": 3
    },
    {
        "id": 5,
        "name": "SpO2 > 94% room air",
        "description": "Requires supplemental oxygen support.",
        "level": 4
    },

    {
        "id": 7,
        "name": "No need O2",
        "description": "Does not require supplemental oxygen.",
        "level": 4
    }
];

export const CirculationAssessmentRes = [
    {
        "id": 1,
        "name": "Pale, cyanosed, cold peripheries",
        "description": "Skin is pale or bluish, and extremities are cold.",
        "level": 1
    },
    {
        "id": 2,
        "name": "Severe Tachycardia / Bradycardia",
        "description": "Extremely high or low heart rate.",
        "level": 1
    },
    {
        "id": 3,
        "name": "Absent Radial Pulse",
        "description": "No detectable pulse in the wrist.",
        "level": 1
    },
    {
        "id": 4,
        "name": "Tachycardia, Weak Pulses",
        "description": "High heart rate with weak pulses.",
        "level": 2
    },
    {
        "id": 5,
        "name": "Confused",
        "description": "Showing signs of confusion.",
        "level": 2
    },
    {
        "id": 6,
        "name": "Septic / Toxic",
        "description": "Symptoms indicating severe infection or toxicity.",
        "level": 2
    },
    {
        "id": 7,
        "name": "CRT > 2 seconds",
        "description": "Capillary refill time greater than 2 seconds.",
        "level": 2
    },
    {
        "id": 8,
        "name": "Peripheries warm, CRT normal",
        "description": "Extremities are warm and capillary refill time is normal.",
        "level": 3
    },
    {
        "id": 9,
        "name": "Cannot stand / walk unsupported",
        "description": "Unable to stand or walk without assistance.",
        "level": 3
    },
    {
        "id": 10,
        "name": "Warm, pink, pulses normal",
        "description": "Skin is warm and pink with normal pulses.",
        "level": 4
    },
    {
        "id": 11,
        "name": "Alert, walking",
        "description": "Alert and able to walk.",
        "level": 4
    }
];

export const ConsciousnessAssessmentRes = [
    {
        "id": 1,
        "name": "Unresponsive",
        "description": "Does not respond to stimuli.",
        "level": 1
    },
    {
        "id": 2,
        "name": "Airway unprotected",
        "description": "Airway is not secure and at risk.",
        "level": 1
    },
    {
        "id": 3,
        "name": "Confused, agitated, disoriented",
        "description": "Showing signs of confusion, agitation, and disorientation.",
        "level": 2
    },
    {
        "id": 4,
        "name": "Obvious Neuro deficits",
        "description": "Clear signs of neurological deficits.",
        "level": 2
    },
    {
        "id": 5,
        "name": "Ongoing Seizures",
        "description": "Currently experiencing seizures.",
        "level": 2
    },
    {
        "id": 6,
        "name": "Abnormal posturing",
        "description": "Displays abnormal body posturing.",
        "level": 2
    },
    {
        "id": 7,
        "name": "Not fully conscious",
        "description": "Not fully awake and alert.",
        "level": 3
    },
    {
        "id": 8,
        "name": "Cannot sit unsupported",
        "description": "Unable to sit without support.",
        "level": 3
    },
    {
        "id": 9,
        "name": "Alert",
        "description": "Fully awake and responsive.",
        "level": 4
    },
    {
        "id": 10,
        "name": "Sit upright",
        "description": "Able to sit upright without support.",
        "level": 4
    }
];

export const BleedingAssessmentRes = [
    {
        "id": 1,
        "name": "Arterial Limb Bleeding",
        "description": "Severe bleeding from an artery in a limb.",
        "level": 1
    },
    {
        "id": 2,
        "name": "Active uncontrolled bleeding",
        "description": "Bleeding that cannot be controlled.",
        "level": 1
    },
    {
        "id": 3,
        "name": "Massive Vaginal bleed",
        "description": "Significant vaginal bleeding.",
        "level": 1
    },
    {
        "id": 4,
        "name": "Severe Facial Injury",
        "description": "Serious injury to the face with potential bleeding.",
        "level": 1
    },
    {
        "id": 5,
        "name": "Severe Pelvic Injury",
        "description": "Serious injury to the pelvis with potential bleeding.",
        "level": 1
    },
    {
        "id": 6,
        "name": "Active Vomit / Cough Blood",
        "description": "Vomiting or coughing up blood.",
        "level": 2
    },
    {
        "id": 7,
        "name": "Suspected vascular injury",
        "description": "Potential injury to a blood vessel.",
        "level": 2
    },
    {
        "id": 8,
        "name": "Suspected Intra-Abdominal Bleeding / Ectopic / AAA",
        "description": "Possible internal bleeding in the abdomen, including ectopic pregnancy or abdominal aortic aneurysm.",
        "level": 2
    },
    {
        "id": 9,
        "name": "Compartment syndrome",
        "description": "Increased pressure within a muscle compartment leading to potential bleeding and tissue damage.",
        "level": 2
    },
    {
        "id": 10,
        "name": "Bleeding from Fractures/Dislocations/Joints/Wounds",
        "description": "Bleeding associated with fractures, dislocations, joint injuries, or wounds.",
        "level": 3
    },
    {
        "id": 11,
        "name": "Menorrhagia",
        "description": "Heavy menstrual bleeding.",
        "level": 3
    },
    {
        "id": 12,
        "name": "ENT Bleeding",
        "description": "Bleeding from the ears, nose, or throat.",
        "level": 3
    },
    {
        "id": 13,
        "name": "Expanding haematoma",
        "description": "A growing collection of blood outside of blood vessels.",
        "level": 3
    },
    {
        "id": 14,
        "name": "Bleeding Disorders",
        "description": "Conditions that affect the blood's ability to clot.",
        "level": 3
    },
    {
        "id": 15,
        "name": "Minimal / No active bleeding",
        "description": "Little to no active bleeding present.",
        "level": 4
    }
];
