package com.learnreactiveprogramming.service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.List;
import java.util.Random;

public class FluxAndMonoGeneratorService {

    public Flux<String> namesFlux(){
        return Flux.fromIterable(List.of("alex", "ben", "chloe")).log();
    }
    public Mono<String> nameMono(){
        return Mono.just("alex");

    }
    public Flux<String> namesFlux_map(int string_length){

        return Flux.fromIterable(List.of("alex", "ben", "chloe"))
                .map(String::toUpperCase)
                .filter(s -> s.length()>string_length)

                .log();
    }
    public Flux<String> namesFlux_flatmap(int string_length){

        return Flux.fromIterable(List.of("alex", "ben", "chloe"))
                .map(String::toUpperCase)
                .filter(s -> s.length()>string_length)
                .flatMap(n -> splitString(n))
                .log();
    }
    public Flux<String>splitString(String name){
        var charArray = name.split("");
        return Flux.fromArray(charArray);
    }
    public Flux<String>splitString_withDelay(String name){
        var charArray = name.split("");
        var delay =  new Random().nextInt(1000);
        return Flux.fromArray(charArray)
                .delayElements(Duration.ofMillis(delay));
    }
    public Flux<String> namesFlux_flatmap_async(int string_length){

        return Flux.fromIterable(List.of("alex", "ben", "chloe"))
                .map(String::toUpperCase)
                .filter(s -> s.length()>string_length)
                .flatMap(n -> splitString(n))
                .log();
    }
    public static void main(String[] args) {

        FluxAndMonoGeneratorService fluxAndMonoGeneratorService = new FluxAndMonoGeneratorService();
        fluxAndMonoGeneratorService.namesFlux().subscribe(name -> {
            System.out.println("Name is : "+name);
        });

        fluxAndMonoGeneratorService.nameMono().subscribe(name -> {
            System.out.println("Name is: "+name);
        });

    }
}
