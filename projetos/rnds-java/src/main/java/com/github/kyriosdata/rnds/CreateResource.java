package com.github.kyriosdata.rnds;

import org.hl7.fhir.r4.model.Bundle;
import org.hl7.fhir.r4.model.Patient;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import ca.uhn.fhir.rest.client.api.IGenericClient;

public class CreateResource {
    public static void main(String[] args) {
        contexto();
    }

    static void contexto() {
        FhirContext context = FhirContext.forR4();
        final String SERVER = "http://hapi.fhir.org/baseR4";
        IGenericClient client = context.newRestfulGenericClient(SERVER);
        Bundle resultados = client.search().forResource(Patient.class).returnBundle(Bundle.class).execute();
        System.out.println("Total de respostas: " + resultados.getEntry().size());
    }

}
