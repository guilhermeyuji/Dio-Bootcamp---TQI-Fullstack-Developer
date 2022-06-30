
class ContaBancaria {

    constructor(agencia, numero, tipo, saldo = 0) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }


    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada!';
        }

        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo += valor;

        return this._saldo;
    }

}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);

        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    }
}


class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);

        this.tipo = 'poupança';
    }
}


class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);

        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada!';
        }

        if (valor > this._saldo) {
            return 'Operação negada!';
        }

        this._saldo -= valor;

        return this._saldo;
    }
}


