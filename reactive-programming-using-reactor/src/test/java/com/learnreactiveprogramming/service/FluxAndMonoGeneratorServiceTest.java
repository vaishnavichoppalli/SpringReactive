package com.learnreactiveprogramming.service;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;

import static org.junit.jupiter.api.Assertions.*;

class FluxAndMonoGeneratorServiceTest {

    FluxAndMonoGeneratorService fluxAndMonoGeneratorService = new FluxAndMonoGeneratorService();

    @Test
    void namesFlux() {
        var namesFlux = fluxAndMonoGeneratorService.namesFlux();
        StepVerifier.create(namesFlux)
                //.expectNext("alex", "ben", "chloe")
                .expectNextCount(3)
                .verifyComplete();
    }

    @Test
    void namesFlux_map() {
        int string_length = 3;
        var namesFlux = fluxAndMonoGeneratorService.namesFlux_map(string_length);
        StepVerifier.create(namesFlux).expectNext("4-ALEX",  "5-CHLOE").verifyComplete();
    }

    @Test
    void namesFlux_flatmap() {
        int string_length = 3;
        var namesFlux = fluxAndMonoGeneratorService.namesFlux_flatmap(string_length);
        StepVerifier.create(namesFlux).expectNext("A","L","E","X","C","H","L","O","E").verifyComplete();
    }

    @Test
    void namesFlux_flatmap_async() {
        int string_length = 3;
        var namesFlux = fluxAndMonoGeneratorService.namesFlux_flatmap_async(string_length);
        StepVerifier.create(namesFlux).expectNextCount(9).verifyComplete();
    }

    @Test
    void namesFlux_concatmap() {

        int string_length = 3;
        var namesFlux = fluxAndMonoGeneratorService.namesFlux_concatmap(string_length);
        StepVerifier.create(namesFlux).expectNextCount(9).verifyComplete();
    }
}