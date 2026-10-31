import { NextResponse } from 'next/server';
import { z } from 'zod';

const internshipSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  college: z.string().optional(),
  degree: z.string().optional(),
  yearOfStudy: z.string().optional(),
  domains: z.array(z.string()).min(1, 'Please select at least one preferred domain'),
  mode: z.enum(['Online', 'In-person', 'Hybrid']),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy to submit' }),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = internshipSchema.parse(body);

    // =========================================================================
    // PLUG-IN HOOKS: Email / Google Sheets / Database integration
    // =========================================================================
    // Example:
    // await sendNotificationEmail(validatedData);
    // await appendToGoogleSheet(validatedData);
    // await prisma.internshipApplication.create({ data: validatedData });
    // =========================================================================

    console.log('--- NEW INTERNSHIP REGISTRATION RECEIVED ---');
    console.log(JSON.stringify(validatedData, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Registration submitted successfully.',
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process application.',
      },
      { status: 500 }
    );
  }
}

