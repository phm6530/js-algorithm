//데코레이터 패턴
abstract class Beverage {
  abstract cost(): number; // 추상 메서드, 구현 없음
}

class Coffee extends Beverage {
  cost() {
    return 3000;
  }
  heat() {
    return "커피를 데웠습니다.";
  }
}

abstract class BeverageDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }
}

class HeatDecorator extends BeverageDecorator {
  cost() {
    return this.beverage.cost();
  }
  heat() {
    if (this.beverage instanceof Coffee) {
      return "커피를 데웠습니다.";
    }
    return "이 음료는 데울 수 없습니다.";
  }
}

class LatteDecorator extends BeverageDecorator {
  cost() {
    return this.beverage.cost() + 1000; // 기존 가격 + 우유값
  }
}

class SugarDecorator extends BeverageDecorator {
  cost() {
    return this.beverage.cost() + 500; // Sugar
  }
}

let drink: Beverage = new Coffee();
drink = new SugarDecorator(drink);
drink = new LatteDecorator(drink);
drink = new HeatDecorator(drink);

console.log(drink.cost()); // 4500
if (drink instanceof HeatDecorator) {
  console.log(drink.heat());
}
