// app/api/dashboard-projects/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Opcional: Esta constante puede ayudar a Vercel a servir los datos más actualizados
// en desarrollo, o si el archivo JSON cambiara sin un nuevo build.
// Para un archivo JSON que forma parte del build, su efecto en producción es limitado.
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'ownProjects.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const projectsData = JSON.parse(fileContents);
    return NextResponse.json(projectsData);
  } catch (error) {
    // Manejo básico de errores si algo sale mal al intentar servir el JSON.
    console.error("Error al cargar proyectos.json:", error);
    return NextResponse.json(
      { message: "Error al cargar los datos de proyectos" },
      { status: 500 } // Código de estado HTTP para error del servidor
    );
  }
}
